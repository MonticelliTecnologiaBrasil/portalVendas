import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Phone, Mail, MoreHorizontal } from "lucide-react"

export function LeadsTable() {
  const leads = [
    {
      id: "1",
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-1111",
      status: "Novo",
      source: "Google",
      value: "R$ 450,00",
      date: "2024-01-15",
      urgency: "Alta",
    },
    {
      id: "2",
      name: "João Santos",
      email: "joao@email.com",
      phone: "(11) 99999-2222",
      status: "Contatado",
      source: "Facebook",
      value: "R$ 320,00",
      date: "2024-01-15",
      urgency: "Média",
    },
    {
      id: "3",
      name: "Ana Costa",
      email: "ana@email.com",
      phone: "(11) 99999-3333",
      status: "Proposta",
      source: "Indicação",
      value: "R$ 680,00",
      date: "2024-01-14",
      urgency: "Baixa",
    },
    {
      id: "4",
      name: "Carlos Lima",
      email: "carlos@email.com",
      phone: "(11) 99999-4444",
      status: "Negociação",
      source: "Instagram",
      value: "R$ 520,00",
      date: "2024-01-14",
      urgency: "Alta",
    },
    {
      id: "5",
      name: "Lucia Oliveira",
      email: "lucia@email.com",
      phone: "(11) 99999-5555",
      status: "Fechado",
      source: "Google",
      value: "R$ 750,00",
      date: "2024-01-13",
      urgency: "Média",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Novo":
        return "bg-blue-100 text-blue-800"
      case "Contatado":
        return "bg-yellow-100 text-yellow-800"
      case "Proposta":
        return "bg-purple-100 text-purple-800"
      case "Negociação":
        return "bg-orange-100 text-orange-800"
      case "Fechado":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "Alta":
        return "bg-red-100 text-red-800"
      case "Média":
        return "bg-yellow-100 text-yellow-800"
      case "Baixa":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="border-0 shadow-lg bg-card/80 backdrop-blur">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Leads Recentes</h3>
            <p className="text-sm text-muted-foreground">Gerencie seus leads e oportunidades</p>
          </div>
          <Button variant="outline">Ver Todos</Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/20">
              <th className="text-left p-4 font-medium text-sm">Cliente</th>
              <th className="text-left p-4 font-medium text-sm">Contato</th>
              <th className="text-left p-4 font-medium text-sm">Status</th>
              <th className="text-left p-4 font-medium text-sm">Origem</th>
              <th className="text-left p-4 font-medium text-sm">Valor</th>
              <th className="text-left p-4 font-medium text-sm">Urgência</th>
              <th className="text-left p-4 font-medium text-sm">Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-b hover:bg-muted/10">
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="font-medium">{lead.name}</div>
                    <div className="text-sm text-muted-foreground">{lead.date}</div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="space-y-1">
                    <div className="text-sm">{lead.email}</div>
                    <div className="text-sm text-muted-foreground">{lead.phone}</div>
                  </div>
                </td>
                <td className="p-4">
                  <Badge className={`text-xs ${getStatusColor(lead.status)}`}>{lead.status}</Badge>
                </td>
                <td className="p-4">
                  <span className="text-sm">{lead.source}</span>
                </td>
                <td className="p-4">
                  <span className="font-medium">{lead.value}</span>
                </td>
                <td className="p-4">
                  <Badge className={`text-xs ${getUrgencyColor(lead.urgency)}`}>{lead.urgency}</Badge>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
