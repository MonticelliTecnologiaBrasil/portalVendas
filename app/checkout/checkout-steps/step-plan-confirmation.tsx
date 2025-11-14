"use client"

import { Plan } from "@/app/constants/plans"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Heart } from "lucide-react"

interface StepPlanConfirmationProps {
  plan: Plan
}

export function StepPlanConfirmation({ plan }: StepPlanConfirmationProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">Plano selecionado</h3>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">{plan.type}</p>
              </div>
              {plan.name.includes("Premium") && <Badge className="bg-primary text-primary-foreground">Premium</Badge>}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">
                R$ {plan.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Principais benefícios:</p>
              <div className="space-y-2">
                {plan.highlights && plan.highlights.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {plan.warning && plan.warning.length > 0 && (
              <div className="flex gap-3 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {plan.warning.map((warn, idx) => (
                    <p key={idx} className="text-xs text-amber-800 dark:text-amber-200">
                      {warn}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
