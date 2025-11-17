import { type Plan, plans } from "@/app/constants/plans"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Plus } from "lucide-react"
import MercadoPagoButton from "./checkout-button"
import { ScrollAnimation } from "./scroll-animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function PlansCatalog() {
  const individualPlans = plans.filter((p: any) => p.type === "Individual")
  const familiarPlans = plans.filter((p: any) => p.type === "Familiar")

  return (
    <section id="planos" className="py-16 md:py-20 bg-muted/20 relative overflow-hidden">
      {/* Blobs responsivos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-60 h-60 md:w-96 md:h-96 bg-blue-200/35 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-0 left-1/3 w-52 h-52 md:w-72 md:h-72 bg-purple-300/55 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-pink-300/40 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Escolha o plano ideal para você</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare nossos planos e encontre o ideal para sua necessidade
          </p>
        </div>

        {/* Tabs responsivas */}
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mx-auto mb-10 flex flex-wrap justify-center gap-2">
            <TabsTrigger value="individual" className="px-6 w-full sm:w-auto">Individual</TabsTrigger>
            <TabsTrigger value="familiar" className="px-6 w-full sm:w-auto">Familiar</TabsTrigger>
          </TabsList>

          {/* Individual */}
          <TabsContent value="individual">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {individualPlans.map((plan: Plan, index: number) => (
                <PlanCard key={index} plan={plan} />
              ))}
            </div>
          </TabsContent>

          {/* Familiar */}
          <TabsContent value="familiar">
            <div className="w-full grid place-items-center pb-8 text-center px-4">
              <span className="font-bold text-sm sm:text-base text-slate-500">
                (CPF do titular + 3 dependentes sem comprovação de vínculo familiar)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
    <ScrollAnimation>
      <Card
        key={plan.id}
        className={`relative p-6 border-2 bg-card/80 h-full backdrop-blur transition-all duration-300
        ${plan.popular ? "border-primary shadow-lg" : "border-border hover:border-primary/50 hover:shadow-md"}`}
      >
        {/* Badges */}
        {plan.popular && (
          <>
            <div className="absolute -top-10 -right-10 w-16 h-16 md:w-20 md:h-20 bg-purple-300/20 rounded-full blur-xl"></div>
            <Badge className="absolute -top-3 left-4 md:left-6 bg-primary text-primary-foreground px-3 py-1 z-10">
              Mais Popular
            </Badge>
          </>
        )}

        {plan.bestValue && (
          <Badge className="absolute -top-3 right-4 md:right-6 bg-green-600 text-white px-3 py-1 z-10">
            Melhor Custo-Benefício
          </Badge>
        )}

        {/* Conteúdo principal */}
        <div className="flex flex-col h-full justify-between gap-6">
          <div className="flex flex-col gap-4 items-center">

            <div className="space-y-1 text-center">
              <h3 className="text-lg sm:text-xl font-bold">{plan.name}</h3>

              {plan.operator && (
                <p className="text-muted-foreground text-sm font-medium">{plan.operator}</p>
              )}

              <Badge variant="outline">{plan.type}</Badge>
            </div>

            {/* Preço */}
            <div className="space-y-1 text-center">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {plan.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>

              {plan.originalPrice && (
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm text-muted-foreground line-through">
                    {plan.originalPrice.toLocaleString("pt-BR", {
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

            {/* Destaques */}
            <div className="space-y-2 w-full">
              <h4 className="font-semibold text-sm text-primary text-center sm:text-left">Assistências:</h4>
              <div className="space-y-1">
                {plan.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Heart className="h-4 w-4 text-primary" />
                    <span className="font-medium text-primary">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Observações */}
            {plan.warning && (
              <div className="space-y-2 w-full">
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

          {/* Botões */}
          <div className="grid gap-4 w-full mt-4">
            {plan.plan_id && (
              <MercadoPagoButton plan_id={plan.plan_id} type={plan.type} />
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full" size="lg">
                  Ver Detalhes
                </Button>
              </DialogTrigger>

              <DialogContent className="w-[95vw] max-w-lg p-6 sm:p-8">
                <DialogHeader className="border-b pb-4">
                  <DialogTitle className="text-2xl sm:text-3xl font-extrabold">
                    {plan.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-lg font-medium text-muted-foreground">
                    {plan.operator} • Plano {plan.type}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-8 mt-4">
                  <section className="space-y-1">
                    <p className="text-sm text-muted-foreground font-medium">Mensalidade</p>
                    <p className="text-3xl sm:text-4xl font-extrabold text-primary">
                      R$ {plan.price.toFixed(2).replace(".", ",")}
                    </p>
                    {plan.originalPrice && (
                      <Badge variant="destructive" className="text-xs">
                        {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}% OFF
                      </Badge>
                    )}
                  </section>

                  {/* Acordeão */}
                  <section className="max-h-80 overflow-y-auto pr-2">
                    <Accordion type="single" collapsible className="space-y-4">
                      {plan.details?.map((detail, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="rounded-lg bg-muted/30 px-4 py-0 transition hover:bg-muted/50"
                        >
                          <AccordionTrigger className="py-4 text-left font-semibold text-base group">
                            <div className="flex items-start gap-3 w-full">
                              <Plus className="h-5 w-5 text-primary group-data-[state=open]:rotate-45 transition duration-300" />
                              <span className="group-hover:text-primary">{detail.title}</span>
                            </div>
                          </AccordionTrigger>

                          <AccordionContent className="pb-4 pt-0 pl-12 text-muted-foreground text-sm whitespace-pre-line">
                            {detail.text}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </section>

                  {/* Observações */}
                  {plan.warning && (
                    <section className="space-y-1">
                      <h4 className="font-semibold text-sm">Observações:</h4>
                      {plan.warning.map((item, index) => (
                        <p key={index} className="text-sm">{item}</p>
                      ))}
                    </section>
                  )}

                  {/* CTA */}
                  {plan.plan_id && (
                    <div className="pt-4 border-t">
                      <MercadoPagoButton plan_id={plan.plan_id} type={plan.type} />
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </Card></ScrollAnimation>
  )
}
