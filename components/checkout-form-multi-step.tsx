"use client"

import { StepCardInfo } from "@/app/checkout/checkout-steps/step-card-info"
import { StepPersonalInfo } from "@/app/checkout/checkout-steps/step-personal-info"
import { StepPlanConfirmation } from "@/app/checkout/checkout-steps/step-plan-confirmation"
import { StepReview } from "@/app/checkout/checkout-steps/step-review"
import { MPLogo } from "@/app/checkout/icons/mercado-pago"
import { plans } from "@/app/constants/plans"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { useState } from "react"

interface CheckoutFormMultiStepProps {
  initialPlanId?: string
  initialType?: string
}

export function CheckoutFormMultiStep({ initialPlanId, initialType }: CheckoutFormMultiStepProps) {
  const selectedPlan = plans.find((p) => p.plan_id === initialPlanId) || plans[0]
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3 // Reduzido de 6 para 4 etapas (removidas endereço e banco)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [personalInfo, setPersonalInfo] = useState({
    cpf: "", // Adicionado CPF aos dados pessoais
    name: "",
    email: "",
    phone: "",
  })

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}

    if (step === 2) {
      if (!personalInfo.cpf.trim() || personalInfo.cpf.replace(/\D/g, '').length !== 11) {
        newErrors.cpf = "CPF inválido"
      }
      if (!personalInfo.name.trim()) newErrors.name = "Nome é obrigatório"
      if (!personalInfo.email.trim()) newErrors.email = "E-mail é obrigatório"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(personalInfo.email)) newErrors.email = "E-mail inválido"
      if (!personalInfo.phone.trim()) newErrors.phone = "Telefone é obrigatório"
    }

    if (step === 3) {
      if (!cardInfo.cardNumber.trim()) newErrors.cardNumber = "Número do cartão é obrigatório"
      if (cardInfo.cardNumber.length < 16) newErrors.cardNumber = "Número do cartão inválido"
      if (!cardInfo.cardHolder.trim()) newErrors.cardHolder = "Titular é obrigatório"
      if (!cardInfo.expiryDate.trim()) newErrors.expiryDate = "Validade é obrigatória"
      if (cardInfo.expiryDate.length < 5) newErrors.expiryDate = "Validade inválida"
      if (!cardInfo.cvv.trim()) newErrors.cvv = "CVV é obrigatório"
      if (cardInfo.cvv.length < 3) newErrors.cvv = "CVV inválido"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      setError(null)
    }
  }

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    setError(null)
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)

    try {
      const cardTokenResponse = await fetch('/api/mercado-pago/card-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          card_number: cardInfo.cardNumber.replace(/\s/g, ''),
          expiration_month: parseInt(cardInfo.expiryDate.split('/')[0]),
          expiration_year: parseInt('20' + cardInfo.expiryDate.split('/')[1]),
          security_code: cardInfo.cvv,
          cardholder: {
            name: cardInfo.cardHolder,
          },
        }),
      })

      if (!cardTokenResponse.ok) {
        const errorData = await cardTokenResponse.json().catch(() => ({}))
        throw new Error(errorData.error || 'Erro ao tokenizar cartão. Verifique os dados do cartão.')
      }

      const cardTokenData = await cardTokenResponse.json()
      const cardTokenId = cardTokenData.id

      const preapprovalResponse = await fetch('/api/mercado-pago/create-preapproval', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preapproval_plan_id: selectedPlan.plan_id,
          reason: `Assinatura de Plano - ${selectedPlan.name}`,
          external_reference: `health_plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          payer_email: personalInfo.email,
          card_token_id: cardTokenId,
          back_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/checkout/success`,
          status: "authorized",
          additionalData: {
            cpf: personalInfo.cpf.replace(/\D/g, ''),
            name: personalInfo.name,
            phone: personalInfo.phone,
            planId: selectedPlan.id,
            planName: selectedPlan.name,
            planPrice: selectedPlan.price,
          },
        }),
      })

      if (!preapprovalResponse.ok) {
        const errorData = await preapprovalResponse.json().catch(() => ({}))
        throw new Error(errorData.message || 'Erro ao criar assinatura. Tente novamente.')
      }

      const preapprovalData = await preapprovalResponse.json()


      window.location.href = `/checkout/success`
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao processar contração. Tente novamente.'
      setError(errorMessage)
      setLoading(false)
    }
  }

  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Contratar Plano de Saúde</CardTitle>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Etapa {currentStep} de {totalSteps}
              </span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-8">
          {currentStep === 1 && (
            <>
              <StepPlanConfirmation plan={selectedPlan} />
              <StepPersonalInfo
                data={personalInfo}
                onChange={setPersonalInfo}
                errors={errors}
                showCpf={true}
              /></>
          )
          }

          {currentStep === 2 && <StepCardInfo data={cardInfo} onChange={setCardInfo} errors={errors} />}

          {currentStep === 3 && (
            <StepReview
              data={{
                plan: {
                  id: selectedPlan.id,
                  name: selectedPlan.name,
                  price: selectedPlan.price,
                },
                personalInfo,
                cardInfo,
              }}
            />
          )}

          {error && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t gap-4">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1 || loading}
              className="flex items-center gap-2 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
              Anterior
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} disabled={loading} className="flex items-center gap-2 ml-auto">
                Próximo
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2 ml-auto">
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Processando...
                  </>
                ) : (
                  <>
                    Confirmar Contração
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            )}
          </div>
          
          <div className="flex gap-3 items-center justify-center">
            <p className="text-xs text-muted-foreground text-center">
              Seus dados estão protegidos e será criada uma assinatura segura via
            </p><MPLogo />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
