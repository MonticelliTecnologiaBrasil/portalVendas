import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactInfo() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 3000-0000",
      description: "Seg a Sex, 8h às 18h",
      action: "Ligar agora",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      description: "Atendimento 24h",
      action: "Chamar no WhatsApp",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@vitalcare.com.br",
      description: "Resposta em até 2h",
      action: "Enviar e-mail",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Paulista, 1000",
      description: "São Paulo - SP",
      action: "Ver no mapa",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">Outras formas de contato</h3>
        <p className="text-muted-foreground">Escolha a forma mais conveniente para você</p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            className="p-4 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <method.icon className="h-6 w-6 text-primary" />
              </div>

              <div className="flex-1">
                <h4 className="font-semibold">{method.title}</h4>
                <p className="text-sm font-medium text-primary">{method.info}</p>
                <p className="text-xs text-muted-foreground">{method.description}</p>
              </div>

              <div className="text-xs text-primary font-medium">{method.action}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-0 shadow-lg bg-card/80 backdrop-blur">
        <div className="flex items-start gap-4">
          <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
          <div className="space-y-2">
            <h4 className="font-semibold">Horários de Atendimento</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium">8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium">9h às 14h</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-muted-foreground">Fechado</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between">
                  <span>WhatsApp:</span>
                  <span className="font-medium text-green-600">24h por dia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
