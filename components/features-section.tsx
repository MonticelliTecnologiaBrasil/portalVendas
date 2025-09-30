import { Card } from "@/components/ui/card"
import { Clock, CreditCard, FileText, HeadphonesIcon, Search, Shield } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Compare Planos",
      description: "Ferramenta inteligente para comparar coberturas, preços e benefícios de diferentes operadoras.",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados protegidos com criptografia de ponta e certificação de segurança digital.",
    },
    {
      icon: Clock,
      title: "Cotação Rápida",
      description: "Receba sua cotação personalizada em menos de 2 minutos, sem burocracia.",
    },
    {
      icon: HeadphonesIcon,
      title: "Suporte Especializado",
      description: "Equipe de consultores especializados para tirar suas dúvidas 24 horas por dia.",
    },
    {
      icon: FileText,
      title: "Processo Simples",
      description: "Contratação 100% online com documentação digital e assinatura eletrônica.",
    },
    {
      icon: CreditCard,
      title: "Pagamento Flexível",
      description: "Diversas formas de pagamento com parcelamento e desconto para pagamento anual.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Por que escolher a VitalCare?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Oferecemos a melhor experiência em contratação de planos de saúde, com tecnologia avançada e atendimento
            humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-card/50 backdrop-blur"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
