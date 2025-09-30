import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Phone, Mail, FileText, DollarSign, Clock } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      id: "1",
      type: "lead",
      icon: User,
      title: "Novo lead cadastrado",
      description: "Maria Silva solicitou cotação",
      time: "2 min atrás",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "2",
      type: "call",
      icon: Phone,
      title: "Ligação realizada",
      description: "Contato com João Santos",
      time: "15 min atrás",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "3",
      type: "email",
      icon: Mail,
      title: "E-mail enviado",
      description: "Proposta para Ana Costa",
      time: "1h atrás",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      id: "4",
      type: "quote",
      icon: FileText,
      title: "Cotação gerada",
      description: "Carlos Lima - Plano Familiar",
      time: "2h atrás",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      id: "5",
      type: "sale",
      icon: DollarSign,
      title: "Venda fechada",
      description: "Lucia Oliveira - R$ 750,00",
      time: "3h atrás",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      id: "6",
      type: "lead",
      icon: User,
      title: "Lead qualificado",
      description: "Pedro Alves demonstrou interesse",
      time: "4h atrás",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
  ]

  return (
    <Card className="p-6 border-0 shadow-lg bg-card/80 backdrop-blur">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Atividade Recente</h3>
          <p className="text-sm text-muted-foreground">Últimas ações da equipe</p>
        </div>
        <Badge variant="outline" className="text-xs">
          <Clock className="mr-1 h-3 w-3" />
          Tempo real
        </Badge>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-8 h-8 ${activity.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <activity.icon className={`h-4 w-4 ${activity.color}`} />
            </div>
            <div className="flex-1 space-y-1">
              <div className="font-medium text-sm">{activity.title}</div>
              <div className="text-sm text-muted-foreground">{activity.description}</div>
              <div className="text-xs text-muted-foreground">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
