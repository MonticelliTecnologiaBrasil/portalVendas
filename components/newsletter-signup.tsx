"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Bell, Gift, Mail, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  const benefits = [
    { icon: TrendingUp, text: "Dicas de economia em saúde" },
    { icon: Shield, text: "Novidades sobre planos" },
    { icon: Gift, text: "Ofertas exclusivas" },
    { icon: Bell, text: "Alertas de promoções" },
  ]

  if (isSubscribed) {
    return (
      <Card className="p-8 border-2 border-green-200 bg-green-50 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Mail className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800">Inscrição confirmada!</h3>
          <p className="text-green-700">
            Obrigado por se inscrever! Você receberá nossas melhores dicas e ofertas exclusivas.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card className=" container mx-auto p-8 border-0 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <Badge className="bg-primary text-primary-foreground mb-2">
            <Gift className="mr-1 h-3 w-3" />
            Conteúdo exclusivo
          </Badge>
          <h3 className="text-2xl font-bold">Receba dicas valiosas por e-mail</h3>
          <p className="text-muted-foreground">
            Cadastre-se e receba semanalmente conteúdos exclusivos sobre planos de saúde
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <benefit.icon className="h-4 w-4 text-primary" />
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Seu melhor e-mail</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <Button type="submit" className="w-full py-6 text-lg font-semibold">
            <Mail className="mr-2 h-5 w-5" />
            Quero Receber as Dicas
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Não enviamos spam. Você pode cancelar a qualquer momento.
          </p>
        </form>
      </div>
    </Card>
  )
}
