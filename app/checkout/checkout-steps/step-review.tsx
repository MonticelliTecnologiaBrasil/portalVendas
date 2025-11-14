"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

interface ReviewData {
  plan: {
    id: string
    name: string
    price: number
  }
  personalInfo: {
    cpf: string // Adicionado CPF
    name: string
    email: string
    phone: string
  }
  cardInfo: {
    cardNumber: string
    cardHolder: string
    expiryDate: string
  }
}

interface StepReviewProps {
  data: ReviewData
}

export function StepReview({ data }: StepReviewProps) {
  const formatCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '')
    if (cleaned.length !== 11) return cpf
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Revise seus dados</h3>
        <p className="text-sm text-muted-foreground">Verifique se tudo está correto antes de confirmar</p>
      </div>

      <div className="grid gap-4">
        {/* Plano */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <CardTitle className="text-base">Plano</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Plano selecionado:</span>
              <span className="font-semibold">{data.plan.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Valor mensal:</span>
              <span className="font-semibold text-primary">
                R$ {data.plan.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Dados Pessoais */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <CardTitle className="text-base">Dados Pessoais</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">CPF:</span>
              <span className="font-semibold">{formatCPF(data.personalInfo.cpf)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Nome:</span>
              <span className="font-semibold">{data.personalInfo.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">E-mail:</span>
              <span className="font-semibold">{data.personalInfo.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Telefone:</span>
              <span className="font-semibold">{data.personalInfo.phone}</span>
            </div>
          </CardContent>
        </Card>

        {/* Dados do Cartão */}
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <CardTitle className="text-base">Cartão</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Titular:</span>
              <span className="font-semibold">{data.cardInfo.cardHolder}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Cartão:</span>
              <span className="font-monospace text-sm">**** **** **** {data.cardInfo.cardNumber.slice(-4)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Validade:</span>
              <span className="font-semibold">{data.cardInfo.expiryDate}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/30">
        <p className="text-xs text-green-800 dark:text-green-200">
          Ao confirmar, você autoriza a cobrança recorrente mensal neste cartão. Você poderá cancelar sua assinatura a
          qualquer momento na seção Minha Conta.
        </p>
      </div>
    </div>
  )
}
