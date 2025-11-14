import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function FailurePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full bg-destructive/10 p-4">
                  <AlertCircle className="w-12 h-12 text-destructive" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Pagamento não aprovado</h1>
                <p className="text-muted-foreground">Ocorreu um problema ao processar seu pagamento</p>
              </div>

              <div className="bg-destructive/5 p-4 rounded-lg space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Verifique seus dados de pagamento e tente novamente. Se o problema persistir, entre em contato
                  conosco.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <Link href="/checkout" className="block">
                  <Button className="w-full">Tentar novamente</Button>
                </Link>
                <Link href="/contato" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Entrar em contato
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
