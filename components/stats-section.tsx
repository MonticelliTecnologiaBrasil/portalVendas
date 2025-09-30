import { Card } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      number: "50+",
      label: "Operadoras Parceiras",
      description: "As melhores do mercado",
    },
    {
      number: "98%",
      label: "Satisfação",
      description: "Clientes satisfeitos",
    },
    {
      number: "24h",
      label: "Atendimento",
      description: "Suporte especializado",
    },
    {
      number: "100%",
      label: "Online",
      description: "Processo digital",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-0 shadow-lg bg-card/80 backdrop-blur">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="font-semibold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
