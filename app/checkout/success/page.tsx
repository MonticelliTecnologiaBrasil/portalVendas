import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card>
            <CardContent className="pt-12 text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full bg-green-100 p-4">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-2xl font-bold">Pagamento confirmado!</h1>
                <p className="text-muted-foreground">Sua contratação foi processada com sucesso</p>
              </div>

              <div className="bg-primary/5 p-4 rounded-lg space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Você receberá um e-mail de confirmação com os detalhes do seu plano e instruções para acessar o app.
                </p>
              </div>

              <div className="grid gap-4 pt-4">
                <Link href="/" className="block">
                  <Button className="py-6 md:py-4 w-full">Voltar para a página inicial</Button>
                </Link>
                <Link href="https://portal.benemedsaude.com.br/ords/f?p=295:9996:508594061776469:::::">
                  <Button className="py-6 md:py-4 w-full bg-secondary hover:bg-secondary">Acesse agora seus benefícios</Button>
                </Link>
                <Link href="/contato" className="block">
                  <Button className="py-6 md:py-4 w-full bg-transparent" variant="outline">
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
