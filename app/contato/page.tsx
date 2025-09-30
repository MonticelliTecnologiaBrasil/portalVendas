import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Header } from "@/components/header"
import { LeadMagnets } from "@/components/lead-magnets"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-3xl lg:text-4xl font-bold text-balance">Entre em contato conosco</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Nossa equipe especializada está pronta para ajudar você a encontrar o plano de saúde ideal
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <LeadMagnets />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
