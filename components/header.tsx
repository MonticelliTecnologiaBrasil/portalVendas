import { Button } from "@/components/ui/button"
import { Heart, Mail, Phone } from "lucide-react"

export function Header() {
  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">🎯 Promoção Especial: 30% de desconto no primeiro ano! </span>
        <Button variant="link" className="text-primary-foreground underline p-0 h-auto font-medium">
          Saiba mais
        </Button>
      </div>

      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">VitalCare</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#cobertura" className="text-foreground hover:text-primary transition-colors">
                Cobertura
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>(11) 3000-0000</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>contato@vitalcare.com.br</span>
                </div>
              </div>
              <Button variant="outline">Entrar</Button>
              <Button>Cotação Grátis</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
