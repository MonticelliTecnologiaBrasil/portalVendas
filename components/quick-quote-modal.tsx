"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Zap, Clock, Gift } from "lucide-react"

interface QuickQuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    city: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Cotação solicitada! Entraremos em contato em breve.")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md p-6 relative bg-card/95 backdrop-blur">
        <Button variant="ghost" size="sm" onClick={onClose} className="absolute top-4 right-4 h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>

        <div className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-primary text-primary-foreground mb-2">
              <Zap className="mr-1 h-3 w-3" />
              Cotação Rápida
            </Badge>
            <h3 className="text-xl font-bold">Receba sua cotação em 2 minutos</h3>
            <p className="text-sm text-muted-foreground">Preencha os dados básicos e receba ofertas personalizadas</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                type="email"
                required
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <input
                type="tel"
                required
                placeholder="Telefone"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <select
                required
                value={formData.age}
                onChange={(e) => setFormData((prev) => ({ ...prev, age: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Idade</option>
                <option value="18-25">18-25 anos</option>
                <option value="26-35">26-35 anos</option>
                <option value="36-45">36-45 anos</option>
                <option value="46+">46+ anos</option>
              </select>

              <select
                required
                value={formData.city}
                onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Cidade</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="rio-janeiro">Rio de Janeiro</option>
                <option value="outras">Outras</option>
              </select>
            </div>

            <Button type="submit" className="w-full py-6 text-lg font-semibold">
              <Clock className="mr-2 h-5 w-5" />
              Receber Cotação Agora
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Gift className="h-3 w-3" />
                <span>Gratuito</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>2 minutos</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-3 w-3" />
                <span>Sem compromisso</span>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  )
}
