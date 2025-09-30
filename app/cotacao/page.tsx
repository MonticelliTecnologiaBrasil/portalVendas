import { Header } from "@/components/header"
import { QuoteWizard } from "@/components/quote-wizard"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Faça sua cotação personalizada</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Responda algumas perguntas e receba uma cotação personalizada em menos de 3 minutos
          </p>
        </div>
        <QuoteWizard />
      </div>
    </main>
  )
}
