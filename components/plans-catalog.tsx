import { type Plan, plans } from "@/app/constants/plans"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Heart, MapPin, Star } from "lucide-react"
import MercadoPagoButton from "./checkout-button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function PlansCatalog() {
  const individualPlans = plans.filter((p: any) => p.type === "Individual")
  const familiarPlans = plans.filter((p: any) => p.type === "Familiar")

  return (
    <section id="planos" className="py-20 bg-muted/20 relative overflow-hidden">
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

          <TabsContent value="individual">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {individualPlans.map((plan: Plan, index: number) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="familiar">
            <div className="w-full grid place-items-center pb-8">
              <span className="text-center font-bold text-slate-500">(CPF do titular + 3 dependentes sem comprovação de vínculo familiar)</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {familiarPlans.map((plan: Plan, index: number) => (
                <PlanCard key={index} plan={plan} />
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
          <div className="space-y-2 flex justify-center flex-col items-center">
            <div className="flex">
              <h3 className="text-xl text-center font-bold">{plan.name}</h3>
            </div>

            {plan.operator && (
              <p className="text-muted-foreground font-medium">{plan.operator}</p>
            )}

            <Badge variant="outline" className="">{plan.type}</Badge>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-3xl font-bold text-primary">
                {plan.price.toLocaleString('pt-BR', {
                  style: "currency",
                  currency: "BRL"
                })}
              </span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            {plan.originalPrice && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground line-through">
                  {plan.originalPrice.toLocaleString('pt-BR', {
                    style: "currency",
                    currency: "BRL"
                  })}
                </span>
                <Badge variant="destructive" className="text-xs">
                  -{Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                </Badge>
              </div>
            )}

          </div>
          <div className="space-y-3 w-full px-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">Assistências:</h4>
              {plan?.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {plan.warning && (
            <div className="space-y-1 w-full px-8">
              <h4 className="font-semibold text-sm">Observações:</h4>
              <div className="space-y-1">
                {plan.warning.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-4 grid-cols-1">
          <div className="w-full flex flex-col gap-4 justify-center">
            {plan.plan_id && (
              <MercadoPagoButton plan_id={plan.plan_id} type={plan.type} />
            )}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="cursor-pointer bg-transparent" size="lg">
                  Ver Detalhes
                </Button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl p-8">
                <DialogHeader className="space-y-2 border-b pb-4">
                  <DialogTitle className="text-3xl font-extrabold tracking-tight">
                    {plan.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg font-medium text-muted-foreground">
                    {plan.operator} • Plano {plan.type}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8">
                  {/* Preço e Destaques */}
                  <section className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground font-medium">Mensalidade</p>
                      <p className="text-4xl font-extrabold text-primary leading-none">
                        R$ {plan.price.toFixed(2).replace(".", ",")}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        por pessoa / por mês
                      </p>

                      {plan.originalPrice && (
                        <Badge variant="destructive" className="text-xs">
                          {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 bg-muted/50 rounded-lg p-4 border">
                      <p className="text-sm font-medium text-muted-foreground">Destaques</p>

                      {plan.highlights?.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <Star className="h-4 w-4 text-primary fill-primary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Rede Credenciada */}
                  <section className="space-y-3">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" /> Rede Credenciada
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.network}
                    </p>
                  </section>

                  {/* Cobertura completa */}
                  <section>
                    <h3 className="text-lg font-semibold mb-3">Cobertura Completa</h3>
                    <div className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                      {plan.coverage && plan.coverage.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm leading-tight">
                          <Check className="h-4 w-4 text-green-600" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* CTA */}
                  {plan.plan_id && (
                    <div className="pt-4 border-t">
                      <MercadoPagoButton plan_id={ plan.plan_id } type={plan.type} />
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </Card>
  )
}