"use client"

import { useSearchParams } from "next/navigation"
import type React from "react"
import { useState } from "react"
import { FooterActions } from "./footer-actions"
import { Header } from "./header"
import { ProgressIndicator } from "./progress-indicator"
import { StepAddress } from "./step-address"
import { StepBank } from "./step-bank"
import { StepContent } from "./step-content"
import { StepPersonal } from "./step-personal"
import { StepReview } from "./step-review"
import type { FormData, StepConfig } from "./types"

const STEPS: StepConfig[] = [
  { id: 1, label: "Pessoal", icon: "👤" },
  { id: 2, label: "Endereço", icon: "📍" },
  { id: 3, label: "Banco", icon: "🏦" },
  { id: 4, label: "Confirmação", icon: "✓" },
]

interface CheckoutContainerProps {
  onPayment: (formData: FormData) => Promise<void>
}

export function CheckoutContainer({ onPayment }: CheckoutContainerProps) {
  const searchParams = useSearchParams()

  const valor = Number(searchParams.get("valor")) || 0
  const produtoContratado = Number(searchParams.get("produtoContratado"))
  const diaVencimento = Number(searchParams.get("diaVencimento")) || 0
  const codigoParceiro = Number(searchParams.get("codigoParceiro")) || 0
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cpf: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    endereco: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    valor,
    produtoContratado,
    diaVencimento,
    codigoParceiro,
    bancoId: 0,
    agencia: "",
    conta: "",
    digito: "",
  })

  const [isPaying, setIsPaying] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const numericFields = ["valor", "produtoContratado", "diaVencimento", "codigoParceiro", "bancoId"]
    const finalValue = numericFields.includes(name) ? Number(value) : value

    setFormData((prev) => ({ ...prev, [name]: finalValue }))
  }

  const nextStep = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStep((prev) => prev + 1)
      setIsAnimating(false)
    }, 200)
  }

  const prevStep = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setStep((prev) => prev - 1)
      setIsAnimating(false)
    }, 200)
  }

  const handlePayment = async () => {
    setIsPaying(true)
    try {
      await onPayment(formData)
    } finally {
      setIsPaying(false)
    }
  }

  return (
    <div className="w-full max-w-2xl">
      <ProgressIndicator steps={STEPS} currentStep={step} />

      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-2xl overflow-hidden backdrop-blur-sm">
        <Header title={STEPS[step - 1].label} step={step} totalSteps={STEPS.length} />

        <div className="px-8 md:px-10 pb-8 md:pb-10">
          <StepContent isAnimating={isAnimating}>
            {step === 1 && <StepPersonal data={formData} onChange={handleChange} />}
            {step === 2 && <StepAddress data={formData} onChange={handleChange} />}
            {step === 3 && <StepBank data={formData} onChange={handleChange} />}
            {step === 4 && <StepReview data={formData} isPaying={isPaying} onPayment={handlePayment} />}
          </StepContent>
        </div>

        <FooterActions step={step} totalSteps={STEPS.length} onPrev={prevStep} onNext={nextStep} />
      </div>

      <div className="text-center mt-6 text-sm text-slate-500 dark:text-slate-400">
        Etapa {step} de {STEPS.length}
      </div>
    </div>
  )
}
