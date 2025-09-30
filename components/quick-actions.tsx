import { Button } from "@/components/ui/button"
import { UserPlus, FileText, Mail, Phone } from "lucide-react"

export function QuickActions() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm" className="flex items-center gap-2">
        <UserPlus className="h-4 w-4" />
        Novo Lead
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
        <FileText className="h-4 w-4" />
        Gerar Relatório
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
        <Mail className="h-4 w-4" />
        Enviar E-mail
      </Button>
      <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
        <Phone className="h-4 w-4" />
        Fazer Ligação
      </Button>
    </div>
  )
}
