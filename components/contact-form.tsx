"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Phone, Mail, MessageCircle, Gift } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    contactPreference: "phone",
    urgency: "normal",
    leadSource: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="p-8 border-0 shadow-2xl bg-card/90 backdrop-blur">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Fale com nossos especialistas</h2>
          <p className="text-muted-foreground">Resposta garantida em até 2 horas</p>
          <Badge className="bg-green-600 text-white">
            <Gift className="mr-1 h-3 w-3" />
            Consultoria gratuita
          </Badge>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome completo *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateFormData("name", e.target.value)}
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">E-mail *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Telefone *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Assunto</label>
              <select
                value={formData.subject}
                onChange={(e) => updateFormData("subject", e.target.value)}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Selecione o assunto</option>
                <option value="cotacao">Solicitar cotação</option>
                <option value="duvidas">Tirar dúvidas</option>
                <option value="contratacao">Contratar plano</option>
                <option value="suporte">Suporte técnico</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Como prefere ser contatado?</label>
            <div className="flex gap-4">
              {[
                { id: "phone", icon: Phone, label: "Telefone" },
                { id: "email", icon: Mail, label: "E-mail" },
                { id: "whatsapp", icon: MessageCircle, label: "WhatsApp" },
              ].map((option) => (
                <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactPreference"
                    value={option.id}
                    checked={formData.contactPreference === option.id}
                    onChange={(e) => updateFormData("contactPreference", e.target.value)}
                    className="text-primary focus:ring-primary"
                  />
                  <option.icon className="h-4 w-4" />
                  <span className="text-sm">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Urgência</label>
            <div className="flex gap-4">
              {[
                { id: "urgent", label: "Urgente (hoje)", color: "text-red-600" },
                { id: "normal", label: "Normal (2-3 dias)", color: "text-blue-600" },
                { id: "flexible", label: "Flexível (1 semana)", color: "text-green-600" },
              ].map((option) => (
                <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="urgency"
                    value={option.id}
                    checked={formData.urgency === option.id}
                    onChange={(e) => updateFormData("urgency", e.target.value)}
                    className="text-primary focus:ring-primary"
                  />
                  <span className={`text-sm ${option.color}`}>{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Mensagem</label>
            <textarea
              value={formData.message}
              onChange={(e) => updateFormData("message", e.target.value)}
              placeholder="Conte-nos mais sobre suas necessidades..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Como nos conheceu?</label>
            <select
              value={formData.leadSource}
              onChange={(e) => updateFormData("leadSource", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Selecione uma opção</option>
              <option value="google">Google</option>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
              <option value="indicacao">Indicação</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <Button type="submit" className="w-full py-6 text-lg font-semibold" disabled={isSubmitting}>
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensagem
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Ao enviar, você concorda com nossos termos de uso e política de privacidade.
          </p>
        </form>
      </div>
    </Card>
  )
}
