import { Button } from "@/components/ui/button"
import BenemedLogoColorido from "@/public/logo-benemed-colorido.svg"
import Image from "next/image"

export function Header() {
  return (
    <>
      <div className="bg-primary text-primary-foreground p-3 text-center text-sm">
        <span className="font-medium">Solicite um atendimento personalizado </span>
        <Button variant="secondary" size="sm" className="text-primary-foreground font-medium">
          Saiba mais
        </Button>
      </div>

      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src={BenemedLogoColorido} alt="Logo benemed" className="w-40" />
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>
              <a href="#cobertura" className="text-foreground hover:text-primary transition-colors">
                Cobertura
              </a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-4">
              {/* <div className="hidden lg:flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <span>(11) 3000-0000</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <span>contato@vitalcare.com.br</span>
                </div>
              </div> */}
              <Button variant="outline">Entrar</Button>
              <Button>Cotação Grátis</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
