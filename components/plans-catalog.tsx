import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Heart, MapPin, Star } from "lucide-react"
import CheckoutButton from "./checkout-button"

interface Plan {
  id: string
  name: string
  operator: string
  type: "Individual" | "Familiar" | "Empresarial"
  price: number
  originalPrice?: number
  coverage: string[]
  highlights: string[]
  rating: number
  network: string
  popular?: boolean
  bestValue?: boolean
}

export const plans = [
  {
    id: "1",
    name: "Essencial Plus",
    operator: "Unimed",
    type: "Individual",
    price: 189.9,
    originalPrice: 249.9,
    coverage: [
      "Consultas médicas ilimitadas",
      "Exames laboratoriais",
      "Internações",
      "Cirurgias",
      "Emergência 24h",
      "Cobertura nacional",
    ],
    highlights: ["Sem carência para emergência", "Rede credenciada ampla"],
    rating: 4.8,
    network: "15.000+ credenciados",
    popular: true,
  },
  {
    id: "2",
    name: "Executivo",
    operator: "SulAmérica",
    type: "Individual",
    price: 298.9,
    coverage: [
      "Consultas ilimitadas",
      "Exames laboratoriais e imagem",
      "Internações",
      "Cirurgias",
      "Emergência 24h",
      "Telemedicina",
    ],
    highlights: ["Telemedicina 24h", "Desconto em farmácias"],
    rating: 4.7,
    network: "18.000+ credenciados",
  },
  {
    id: "3",
    name: "Básico Seguro",
    operator: "Hapvida",
    type: "Individual",
    price: 149.9,
    coverage: [
      "Consultas médicas",
      "Exames básicos",
      "Internações",
      "Emergência 24h",
      "Cobertura regional",
    ],
    highlights: ["Preço acessível", "Ideal para jovens"],
    rating: 4.4,
    network: "8.000+ credenciados",
  },
  {
    id: "4",
    name: "Premium Care",
    operator: "Bradesco Saúde",
    type: "Familiar",
    price: 456.9,
    originalPrice: 589.9,
    coverage: [
      "Consultas ilimitadas",
      "Exames alta complexidade",
      "Internações em apartamento",
      "Cirurgias",
      "Cobertura internacional",
    ],
    highlights: ["Cobertura para até 4 pessoas", "Check-up anual gratuito"],
    rating: 4.9,
    network: "22.000+ credenciados",
    bestValue: true,
  },
  {
    id: "5",
    name: "Master Health",
    operator: "Porto Seguro",
    type: "Familiar",
    price: 567.9,
    coverage: [
      "Consultas",
      "Exames avançados",
      "Internações premium",
      "Emergência 24h",
      "Odontologia completa",
    ],
    highlights: ["Inclui plano odontológico", "Cobertura mundial"],
    rating: 4.9,
    network: "25.000+ credenciados",
  },
  {
    id: "6",
    name: "Vida Plena",
    operator: "Amil",
    type: "Individual",
    price: 234.9,
    originalPrice: 289.9,
    coverage: [
      "Consultas ilimitadas",
      "Terapias (fisioterapia/psicologia)",
      "Internações",
      "Emergência 24h",
    ],
    highlights: ["Cobertura terapêutica", "Programa de bem-estar"],
    rating: 4.6,
    network: "12.000+ credenciados",
  },
  {
    id: "7",
    name: "Master Blaster Health",
    operator: "Porto Seguro",
    type: "Familiar",
    price: 567.9,
    coverage: [
      "Imortalidade",
      "Consultas",
      "Exames avançados",
      "Internações premium",
      "Emergência 24h",
      "Odontologia completa",
    ],
    highlights: ["Inclui plano odontológico", "Cobertura mundial"],
    rating: 4.9,
    network: "25.000+ credenciados",
  },,
]


export function PlansCatalog() {
  const individualPlans = plans.filter((p: any) => p.type === "Individual").slice(0, 3)
  const familiarPlans = plans.filter((p: any) => p.type === "Familiar").slice(0, 3)

  return (
    <section id="planos" className="py-20 bg-muted/20 relative overflow-hidden">
      {/* Blobs de fundo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-200/35 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-0 left-1/3 w-72 h-72 bg-purple-300/55 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-pink-300/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">Escolha o plano ideal para você</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare nossos planos e encontre o ideal para sua necessidade
          </p>
        </div>

        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center">
            <TabsTrigger value="individual" className="px-6">Individual</TabsTrigger>
            <TabsTrigger value="familiar" className="px-6">Familiar</TabsTrigger>
          </TabsList>

          {/* TAB: INDIVIDUAL */}
          <TabsContent value="individual">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualPlans.map((plan: any) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </TabsContent>

          {/* TAB: FAMILIAR */}
          <TabsContent value="familiar">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familiarPlans.map((plan: any) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <Card
      key={plan.id}
      className={`relative p-6 border-2 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur 
        ${plan.popular ? "border-primary shadow-lg" : "border-border hover:border-primary/50"}`}
    >
      {/* Blob decorativo para planos populares */}
      {plan.popular && (
        <>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl"></div>
          <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 z-10">
            Mais Popular
          </Badge>
        </>
      )}

      {plan.bestValue && (
        <Badge className="absolute -top-3 right-6 bg-green-600 text-white px-3 py-1 z-10">
          Melhor Custo-Benefício
        </Badge>
      )}

      <div className="flex flex-col h-full justify-between gap-8">
        <div className="flex flex-col gap-4 items-center justify-around">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{plan.rating}</span>
              </div>
            </div>

            <p className="text-muted-foreground font-medium">{plan.operator}</p>

            <Badge variant="outline" className="text-xs">{plan.type}</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                R$ {plan.price.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            {plan.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  R$ {plan.originalPrice.toFixed(2).replace(".", ",")}
                </span>
                <Badge variant="destructive" className="text-xs">
                  -{Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                </Badge>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{plan.network}</span>
            </div>

            <div className="space-y-2">
              {plan.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Cobertura inclusa:</h4>
            <div className="space-y-1">
              {plan.coverage.slice(0, 4).map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
              {plan.coverage.length > 4 && (
                <div className="text-sm text-muted-foreground">
                  +{plan.coverage.length - 4} benefícios adicionais
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid gap-4 grid-cols-1">
          <CheckoutButton preferenceId="521508008-34ff98d4-fb5a-45a3-bcf5-880226ee3f3e" />
          <div className="w-full flex justify-center">
            <Button variant="outline" className="bg-transparent" size="lg">
              Ver Detalhes
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}