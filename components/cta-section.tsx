"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart } from "lucide-react"
import MercadoPagoButton from "./checkout-button"

interface PlanCard {
  id: string
  name: string
  type: "Individual" | "Familiar"
  price: number
  highlights: string[]
  warning?: string[]
  plan_id?: string
}

const plans: PlanCard[] = [
  {
    id: "1",
    name: "Essencial Saúde Mental",
    type: "Individual",
    price: 99.0,
    highlights: [
      "Psicologia Online*",
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial",
      "Acidentes Pessoais R$ 10 mil",
      "Assistência funeral R$ 5 mil",
    ],
    warning: ["* Até cinco atendimentos com psicólogos por mês."],
    plan_id: "e6b561a133be433bb6450ae64b572bd6",
  },
  {
    id: "2",
    name: "Premium Saúde Mental",
    type: "Individual",
    price: 199.0,
    highlights: [
      "Psicologia Online*",
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial",
      "Assistência PET",
      "Check-up completo",
      "Acidentes Pessoais R$ 10 mil",
      "Assistência funeral R$ 5 mil",
    ],
    warning: ["* Até cinco atendimentos com psicólogos por mês."],
    plan_id: "076d7b9365bb46eb9f12871ecbd0b506",
  },
  {
    id: "3",
    name: "Essencial Saúde Mental",
    type: "Familiar",
    price: 198.0,
    highlights: [
      "Psicologia Online *",
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistências Residencial **",
      "Acidentes Pessoais R$ 10 mil ***",
      "Assistência funeral R$ 5 mil ***",
    ],
    warning: [
      "* Até cinco atendimentos com psicólogos por mês.",
      "** Assistência Residencial: Disponível para o titular.",
      "*** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado.",
    ],
  },
  {
    id: "4",
    name: "Premium Saúde Mental",
    type: "Familiar",
    price: 289.0,
    highlights: [
      "Psicologia Online *",
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial **",
      "Assistência PET **",
      "Check-up completo",
      "Acidentes Pessoais R$ 10 mil ***",
      "Assistência funeral R$ 5 mil ***",
    ],
    warning: [
      "* Até cinco atendimentos com psicólogos por mês.",
      "** Assistência Pet: Disponível para o PET do Titular/Segurado. Válido para cães e gatos com idade até 8 anos. Um pet por CPF. | Assistência Residencial: Disponível para o titular.",
      "*** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado.",
    ],
  },
]

export function CTASection() {
  const individualPlans = plans.filter((p) => p.type === "Individual")
  const familiarPlans = plans.filter((p) => p.type === "Familiar")

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-200/35 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-0 left-1/3 w-72 h-72 bg-purple-300/55 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Escolha o plano ideal para você</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Planos especializados em saúde mental com benefícios exclusivos
          </p>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center">
            <TabsTrigger value="individual" className="px-6">
              Individual
            </TabsTrigger>
            <TabsTrigger value="familiar" className="px-6">
              Familiar
            </TabsTrigger>
          </TabsList>

          <TabsContent value="individual">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {individualPlans.map((plan, index) => (
                <div key={plan.id}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="familiar">
            <div className="w-full grid place-items-center pb-8">
              <span className="text-center font-medium text-sm text-muted-foreground">
                (CPF do titular + 3 dependentes sem comprovação de vínculo familiar)
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {familiarPlans.map((plan, index) => (
                <div key={plan.id}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: PlanCard }) {
  const isPremium = plan.name.includes("Premium")

  return (
    <Card
      className={`relative p-6 border-2 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur flex flex-col h-full
        ${isPremium ? "border-primary shadow-lg" : "border-border hover:border-primary/50"}`}
    >
      {isPremium && (
        <>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl"></div>
          <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 z-10">
            Mais Popular
          </Badge>
        </>
      )}

      <div className="flex flex-col h-full justify-between gap-6">
        {/* Header */}
        <div className="flex flex-col gap-3 items-center text-center">
          <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
          <Badge variant="outline" className="text-xs">
            {plan.type}
          </Badge>

          {/* Price */}
          <div className="space-y-1 pt-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-bold text-primary">
                {plan.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-3 flex-1 px-8">
          <h4 className="font-semibold text-sm text-primary">Assistências:</h4>
          <ul className="space-y-2">
            {plan.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Heart className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-primary font-medium">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Warnings */}
        {plan.warning && plan.warning.length > 0 && (
          <div className="space-y-2 rounded-lg px-8">
            <h4 className="font-semibold text-xs text-muted-foreground">Observações:</h4>
            <div className="space-y-1">
              {plan.warning.map((item, index) => (
                <p key={index} className="text-xs text-muted-foreground leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        )}
        <MercadoPagoButton />
      </div>
    </Card>
  )
}
