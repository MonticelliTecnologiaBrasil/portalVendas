import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calculator, BookOpen, Video, Gift } from "lucide-react"

export function LeadMagnets() {
  const leadMagnets = [
    {
      id: "guia-completo",
      title: "Guia Completo de Planos de Saúde 2024",
      description: "E-book gratuito com tudo que você precisa saber antes de contratar",
      icon: BookOpen,
      type: "PDF",
      size: "2.5 MB",
      downloads: "15.000+",
      badge: "Mais baixado",
    },
    {
      id: "calculadora",
      title: "Calculadora de Economia",
      description: "Descubra quanto você pode economizar mudando de plano",
      icon: Calculator,
      type: "Ferramenta",
      size: "Online",
      downloads: "8.500+",
      badge: "Exclusivo",
    },
    {
      id: "checklist",
      title: "Checklist de Contratação",
      description: "Lista com 20 pontos essenciais para avaliar um plano",
      icon: FileText,
      type: "PDF",
      size: "1.2 MB",
      downloads: "12.000+",
      badge: "Gratuito",
    },
    {
      id: "webinar",
      title: "Webinar: Como Escolher o Plano Ideal",
      description: "Aula online gratuita com especialista em saúde suplementar",
      icon: Video,
      type: "Vídeo",
      size: "45 min",
      downloads: "3.200+",
      badge: "Ao vivo",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold">Materiais gratuitos</h3>
        <p className="text-muted-foreground">Baixe nossos guias e ferramentas exclusivas</p>
      </div>

      <div className="space-y-4">
        {leadMagnets.map((magnet) => (
          <Card
            key={magnet.id}
            className="p-4 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/80 backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <magnet.icon className="h-6 w-6 text-primary" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-semibold text-sm leading-tight">{magnet.title}</h4>
                  <Badge variant="outline" className="text-xs">
                    {magnet.badge}
                  </Badge>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">{magnet.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>
                      {magnet.type} • {magnet.size}
                    </span>
                    <span>{magnet.downloads} downloads</span>
                  </div>

                  <Button size="sm" className="h-8 px-3 text-xs">
                    <Download className="mr-1 h-3 w-3" />
                    Baixar
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 border-2 border-primary/20 bg-primary/5">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Gift className="h-8 w-8 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Consultoria Personalizada Gratuita</h3>
            <p className="text-sm text-muted-foreground">
              Agende uma conversa de 30 minutos com nosso especialista e receba uma análise personalizada
            </p>
          </div>
          <Button className="w-full">Agendar Consultoria Gratuita</Button>
        </div>
      </Card>
    </div>
  )
}
