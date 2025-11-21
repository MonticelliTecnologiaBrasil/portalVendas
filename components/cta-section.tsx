"use client"

import { Plan } from "@/app/constants/plans"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Plus } from "lucide-react"
import MercadoPagoButton from "./checkout-button"
import { ScrollAnimation } from "./scroll-animations"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export function CTASection({ plans }: { plans: Plan[] }) {
  const individualPlans = plans.filter((p) => p.type === "Individual")
  const familiarPlans = plans.filter((p) => p.type === "Familiar")

  return (
    <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/35 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-0 left-1/3 w-60 sm:w-72 h-60 sm:h-72 bg-purple-300/55 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* TITULO */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            Escolha o plano ideal para você
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
            Planos especializados em saúde mental com benefícios exclusivos
          </p>
        </div>

        {/* TABS */}
        <Tabs defaultValue="individual" className="w-full">
          <TabsList className="mx-auto mb-10 flex justify-center gap-2 px-2 overflow-x-auto">
            <TabsTrigger value="individual" className="px-4 sm:px-6 whitespace-nowrap">
              Individual
            </TabsTrigger>
            <TabsTrigger value="familiar" className="px-4 sm:px-6 whitespace-nowrap">
              Familiar
            </TabsTrigger>
          </TabsList>

          {/* INDIVIDUAL */}
          <TabsContent value="individual">
            <div className={`${individualPlans.length < 3 ? "flex flex-col lg:flex-row justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"} gap-6 sm:gap-8`}>
              {individualPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </TabsContent>

          {/* FAMILIAR */}
          <TabsContent value="familiar">
            <div className="w-full grid place-items-center pb-6 sm:pb-8">
              <span className="text-center font-medium text-xs sm:text-sm text-muted-foreground">
                (CPF do titular + 3 dependentes sem comprovação de vínculo familiar)
              </span>
            </div>

            <div className={`${individualPlans.length < 2 ? "flex flex-col lg:flex-row justify-center" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"} gap-6 sm:gap-8`}>
              {familiarPlans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

/* CARD RESPONSIVO */
function PlanCard({ plan }: { plan: Plan }) {
  const isPremium = plan.name.includes("Premium")

  return (
    <ScrollAnimation>
      <Card
        className={`md:min-w-md lg:min-w-full w-full relative p-4 sm:p-6 border-2 hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur flex flex-col h-full
      ${isPremium ? "border-primary shadow-lg" : "border-border hover:border-primary/50"}`}
      >
        {isPremium && (
          <>
            <div className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 bg-purple-300/20 rounded-full blur-xl"></div>
            <Badge className="absolute -top-3 left-4 sm:left-6 bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
              Mais Popular
            </Badge>
          </>
        )}

        <div className="flex flex-col h-full justify-between gap-6">
          {/* HEADER */}
          <div className="flex flex-col gap-2 items-center text-center">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">{plan.name}</h3>

            <Badge variant="outline" className="text-[10px] sm:text-xs">
              {plan.type}
            </Badge>

            <div className="pt-1">
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl sm:text-3xl font-bold text-primary">
                  {plan.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm">/mês</span>
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          {plan.highlights && (
            <div className="space-y-3 flex-1 px-4 sm:px-8">
              <h4 className="font-semibold text-xs sm:text-sm text-primary">Assistências:</h4>
              <ul className="space-y-2">
                {plan.highlights && plan.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm">
                    <Heart className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-primary font-medium">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}


          {/* WARNINGS */}
          {plan.warning && (
            <div className="px-4 sm:px-8 space-y-2">
              <h4 className="font-semibold text-[11px] sm:text-xs text-muted-foreground">
                Observações:
              </h4>
              {plan.warning.map((item, index) => (
                <p key={index} className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          )}


          <div className="grid gap-3">
            {/* DIALOG */}
            {plan.highlights && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="cursor-pointer bg-transparent w-full" size="lg">
                    Ver Detalhes
                  </Button>
                </DialogTrigger>

                <DialogContent className="w-[95%] max-w-lg sm:max-w-2xl p-4 sm:p-8 max-h-[90vh] overflow-y-auto">
                  <DialogHeader className="space-y-2 border-b pb-4">
                    <DialogTitle className="text-xl sm:text-3xl font-extrabold tracking-tight">
                      {plan.name}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-8">
                    {/* PRICE */}
                    <section className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">Mensalidade</p>
                        <p className="text-3xl sm:text-4xl font-extrabold text-primary leading-none">
                          R$ {plan.price.toFixed(2).replace(".", ",")}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          por pessoa / por mês
                        </p>
                      </div>
                    </section>

                    {/* DETAILS */}
                    <section className="max-h-80 sm:max-h-96 overflow-y-auto pr-2">
                      <Accordion type="single" collapsible className="space-y-4">
                        {plan.details?.map((detail, index) => (
                          <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-0 rounded-lg bg-muted/30 px-4 sm:px-6 py-0 hover:bg-muted/50"
                          >
                            <AccordionTrigger className="py-4 sm:py-5 text-left text-sm sm:text-lg font-semibold">
                              <div className="flex items-start gap-4 w-full">
                                <Plus className="h-4 sm:h-5 w-4 sm:w-5 text-primary flex-shrink-0 group-data-[state=open]:rotate-45 transition-transform" />
                                {detail.title}
                              </div>
                            </AccordionTrigger>

                            <AccordionContent className="pb-4 pl-10 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                              {detail.text}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </section>

                    {plan.warning && (
                      <section className="space-y-1">
                        <h4 className="font-semibold text-sm">Observações:</h4>
                        {plan.warning.map((item, index) => (
                          <p key={index} className="text-xs sm:text-sm">
                            {item}
                          </p>
                        ))}
                      </section>
                    )}

                    {/* CTA BUTTON */}
                    {plan.plan_id && (
                      <div className="pt-4 border-t">
                        <MercadoPagoButton plan_id={plan.plan_id} type={plan.type} />
                      </div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
            {/* CTA BUTTON OUTSIDE */}
            {plan.plan_id && (
              <div className="">
                <MercadoPagoButton plan_id={plan.plan_id} type={plan.type} />
              </div>
            )}
          </div>
        </div>
      </Card>
    </ScrollAnimation>
  )
}

