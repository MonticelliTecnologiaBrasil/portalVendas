import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const comparisonData = [
    {
      feature: "Consultas médicas",
      basic: true,
      premium: true,
      master: true,
    },
    {
      feature: "Exames laboratoriais",
      basic: true,
      premium: true,
      master: true,
    },
    {
      feature: "Internações",
      basic: "Enfermaria",
      premium: "Apartamento",
      master: "Apartamento Premium",
    },
    {
      feature: "Emergência 24h",
      basic: true,
      premium: true,
      master: true,
    },
    {
      feature: "Cobertura internacional",
      basic: false,
      premium: true,
      master: true,
    },
    {
      feature: "Telemedicina",
      basic: false,
      premium: true,
      master: true,
    },
    {
      feature: "Odontologia",
      basic: false,
      premium: false,
      master: true,
    },
    {
      feature: "Check-up anual",
      basic: false,
      premium: true,
      master: true,
    },
  ]

  const plans = [
    {
      name: "Básico",
      price: "R$ 149,90",
      color: "border-gray-300",
    },
    {
      name: "Premium",
      price: "R$ 456,90",
      color: "border-primary",
      popular: true,
    },
    {
      name: "Master",
      price: "R$ 567,90",
      color: "border-yellow-500",
    },
  ]

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Compare nossos planos</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Veja lado a lado as diferenças entre nossos planos e escolha o que melhor atende suas necessidades
          </p>
        </div>

        <Card className="overflow-hidden border-0 shadow-xl bg-card/80 backdrop-blur">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-6 font-semibold">Benefícios</th>
                  {plans.map((plan, index) => (
                    <th key={index} className="text-center p-6 min-w-[200px]">
                      <div className="space-y-3">
                        <div className="relative">
                          {plan.popular && (
                            <Badge className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs">
                              Popular
                            </Badge>
                          )}
                          <h3 className="text-lg font-bold">{plan.name}</h3>
                        </div>
                        <div className="text-2xl font-bold text-primary">{plan.price}</div>
                        <div className="text-sm text-muted-foreground">/mês</div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/20">
                    <td className="p-6 font-medium">{row.feature}</td>
                    <td className="p-6 text-center">
                      {typeof row.basic === "boolean" ? (
                        row.basic ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{row.basic}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.premium === "boolean" ? (
                        row.premium ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{row.premium}</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {typeof row.master === "boolean" ? (
                        row.master ? (
                          <Check className="h-5 w-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm">{row.master}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-6"></td>
                  {plans.map((plan, index) => (
                    <td key={index} className="p-6 text-center">
                      <Button className="w-full">
                        Contratar
                      </Button>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      </div>
    </section>
  )
}
