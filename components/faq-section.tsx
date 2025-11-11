"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { KNOW_MORE, WPP_NUMBER } from "@/contants/whatsapp"
import { ChevronRight, HelpCircle, Plus } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("geral")

  const faqCategories = {
    geral: [
      {
        question: "O que é a Benemed Saúde?",
        answer:
          "A Benemed Saúde é uma empresa que oferece soluções em saúde, bem-estar e proteção por meio de serviços acessíveis como telemedicina, descontos em farmácias, consultas presenciais com preços reduzidos e muito mais.",
      },
      {
        question: "A Benemed é um plano de saúde?",
        answer:
          "Não. A Benemed oferece benefícios de saúde com acesso facilitado a serviços médicos, odontológicos e assistenciais, mas não é um plano de saúde regulamentado pela ANS.",
      },
      {
        question: "Como posso me cadastrar?",
        answer:
          "Você pode se cadastrar de forma simples e rápida pela landing page oficial, preenchendo seus dados e escolhendo o plano que melhor atende às suas necessidades.",
      },
      {
        question: "Como faço o agendamento?",
        answer:
          "Basta entrar no portal, app ou ligar na central de atendimento. Em até 48h a Benemed retorna com as opções disponíveis na sua região.",
      },
      {
        question:
          "Não encontrei clínicas disponíveis na minha região ao consultar a plataforma. Como devo proceder?",
        answer:
          "Fique tranquilo! Você pode acionar diretamente o nosso Concierge de Atendimento pelo 0800 025 8960. Nossa equipe dedicada irá priorizar seu caso, buscando alternativas em parceiros próximos à sua localidade para oferecer a melhor solução com agilidade e conveniência.",
      },
      {
        question: "Como funciona a Telemedicina da Benemed?",
        answer:
          "Você pode realizar consultas online com médicos generalistas 24h por dia, 7 dias por semana. Também oferecemos especialidades médicas de segunda a sexta, das 8h às 20h (exceto feriados).",
      },
      {
        question: "Como utilizar o desconto em farmácia?",
        answer:
          "Apresente seu CPF ou carteirinha digital em farmácias da rede. A ativação do benefício é feita no primeiro uso via app ou site.",
      },
      {
        question: "O que está incluso no Check-up Completo?",
        answer:
          "Consulta médica presencial com clínico geral, exames solicitados e retorno para avaliação, tudo sem custo adicional.",
      },
      {
        question: "Existe carência?",
        answer:
          "Somente o check-up tem carência de 180 dias após a adesão (é permitido 1 check-up por ano).",
      },
      {
        question: "Como posso acessar os serviços da Benemed?",
        answer: `
          • Portal Web: portal.benemedsaude.com.br  
          • App Benemed Saúde  
          • Telefone 24h: 0800 025 8960  
          • WhatsApp e Central de Suporte: (11) 3777 9753
        `,
      },
    ],
  }

  const categories = [
    { id: "geral", label: "Dúvidas Frequentes", icon: HelpCircle },
  ]

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">

          <h2 className="text-4xl lg:text-5xl font-bold text-balance">
            Respostas para suas <span className="text-primary">principais dúvidas</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Encontre respostas rápidas sobre a Benemed Saúde, seus serviços e benefícios.
            Não encontrou sua dúvida?{" "}
            <Link href="/contato" className="text-primary font-semibold hover:underline">
              Fale conosco
            </Link>
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-100">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted/50 text-foreground hover:bg-muted border border-border/50"
                }`}
            >
              {category.icon && <category.icon className="h-4 w-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Card className="border-0 shadow-lg bg-card/90 backdrop-blur p-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqCategories[activeCategory as keyof typeof faqCategories].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0 overflow-hidden rounded-lg bg-muted/30 px-6 py-0 transition-all duration-200 hover:bg-muted/50 data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="py-5 text-left font-semibold text-lg hover:no-underline group">
                  <div className="flex items-start gap-4 w-full">
                    <Plus className="h-5 w-5 text-primary flex-shrink-0 group-data-[state=open]:rotate-45 transition-transform duration-300 mt-0.5" />
                    <span className="text-foreground group-hover:text-primary transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 pl-14 text-muted-foreground leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Ainda tem dúvidas?</h3>
              <p className="text-muted-foreground text-lg">
                Fale com um especialista e encontre o plano perfeito para você
              </p>
            </div>
            <Link href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(KNOW_MORE)}`} target="_blank">
              <Button size="lg" className="group min-w-fit">
                Entrar em Contato
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
