import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Phone, Mail, Download, Share } from "lucide-react"

interface QuoteResult {
  id: string
  planName: string
  operator: string
  monthlyPrice: number
  originalPrice?: number
  discount?: number
  coverage: string[]
  highlights: string[]
  rating: number
  recommended?: boolean
}

const mockResults: QuoteResult[] = [
  {
    id: "1",
    planName: "Essencial Plus",
    operator: "Unimed",
    monthlyPrice: 189.9,
    originalPrice: 249.9,
    discount: 24,
    coverage: ["Consultas médicas ilimitadas", "Exames laboratoriais", "Emergência 24h", "Internações", "Cirurgias"],
    highlights: ["Sem carência para emergência", "Rede credenciada ampla"],
    rating: 4.8,
    recommended: true,
  },
  {
    id: "2",
    planName: "Vida Plena",
    operator: "Amil",
    monthlyPrice: 234.9,
    originalPrice: 289.9,
    discount: 19,
    coverage: [
      "Consultas médicas ilimitadas",
      "Exames laboratoriais",
      "Emergência 24h",
      "Internações",
      "Fisioterapia",
      "Psicologia",
    ],
    highlights: ["Cobertura para terapias", "Programa de bem-estar"],
    rating: 4.6,
  },
  {
    id: "3",
    planName: "Executivo",
    operator: "SulAmérica",
    monthlyPrice: 298.9,
    coverage: [
      "Consultas médicas ilimitadas",
      "Exames de alta complexidade",
      "Emergência 24h",
      "Internações",
      "Telemedicina",
      "Medicina ocupacional",
    ],
    highlights: ["Telemedicina 24h", "Desconto em farmácias"],
    rating: 4.7,
  },
]

export function QuoteResults() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-balance">Sua cotação está pronta!</h2>
        <p className="text-xl text-muted-foreground text-pretty">
          Encontramos {mockResults.length} planos ideais para seu perfil
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Download className="h-4 w-4" />
            Baixar PDF
          </Button>
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Share className="h-4 w-4" />
            Compartilhar
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {mockResults.map((result, index) => (
          <Card
            key={result.id}
            className={`p-6 border-2 ${result.recommended ? "border-primary bg-primary/5" : "border-border"}`}
          >
            {result.recommended && (
              <Badge className="mb-4 bg-primary text-primary-foreground">Recomendado para você</Badge>
            )}

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{result.planName}</h3>
                  <p className="text-muted-foreground font-medium">{result.operator}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{result.rating}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary">
                      R$ {result.monthlyPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                  {result.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground line-through">
                        R$ {result.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <Badge variant="destructive" className="text-xs">
                        -{result.discount}%
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Cobertura inclusa:</h4>
                  <div className="space-y-1">
                    {result.coverage.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Destaques:</h4>
                  {result.highlights.map((highlight, idx) => (
                    <div key={idx} className="text-sm text-primary font-medium">
                      • {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    Contratar Este Plano
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    Ver Detalhes Completos
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <p className="text-sm font-medium">Precisa de ajuda?</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>(11) 3000-0000</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>contato@vitalcare.com.br</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-8 border-t">
        <h3 className="text-lg font-semibold">Não encontrou o que procurava?</h3>
        <p className="text-muted-foreground">Nossa equipe pode ajudar você a encontrar outras opções personalizadas</p>
        <Button variant="outline" size="lg">
          Falar com Consultor
        </Button>
      </div>
    </div>
  )
}
