import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock } from "lucide-react"
import Link from "next/link"

export default function PendingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full bg-amber-100 p-4">
                  <Clock className="w-12 h-12 text-amber-600 animate-spin" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Pagamento pendente</h1>
                <p className="text-muted-foreground">Estamos processando seu pagamento</p>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Seu pagamento está sendo verificado. Você receberá uma confirmação em breve por e-mail.
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <Link href="/" className="block">
                  <Button className="w-full">Voltar para a página inicial</Button>
                </Link>
                <Link href="/contato" className="block">
                  <Button variant="outline" className="w-full bg-transparent">
                    Fale com um consultor
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
