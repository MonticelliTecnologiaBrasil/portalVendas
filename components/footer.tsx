import { Button } from "@/components/ui/button"
import { CONTACT_MESSAGE, WPP_NUMBER } from "@/contants/whatsapp"
import BenemedLogoColorido from "@/public/logo-benemed-colorido.svg"
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { WhatsAppFloat } from "./whatsapp"

export function Footer() {
  return (
    <>
      <footer className="bg-card border-t pt-14 pb-10 mt-20">
        <div className="container mx-auto px-4">
          
          {/* Top Section */}
          <div className="grid md:grid-cols-4 gap-10 pb-14 border-b">
            
            {/* Brand */}
            <div className="space-y-4">
              <Image src={BenemedLogoColorido} alt="Logo Benemed" className="w-36" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cuidando da sua saúde com atendimento humano e transparente.
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-semibold mb-3">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#planos" className="hover:text-primary transition">Planos</a></li>
                <li><a href="#cobertura" className="hover:text-primary transition">Cobertura</a></li>
                <li><a href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`} target="_blank" className="hover:text-primary flex transition">Contato <ArrowUpRight size={12}/></a></li>
              </ul>
            </div>

            {/* CTA Atendimento */}
            <div className="space-y-4">
              <h4 className="font-semibold">Atendimento</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fale agora com um especialista.
              </p>
              <Button
                className="w-full"
                asChild
              >
                <a href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`} target="_blank">
                  Falar no WhatsApp
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </Button>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/benemedbr/" target="_blank" className="hover:text-primary transition"><Linkedin size={22} /></a>
                <a href="https://www.instagram.com/_benemed?igsh=MXI5em5ieGhxbjY5eg==" target="_blank" className="hover:text-primary transition"><Instagram size={22} /></a>
              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-6 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Benemed Saúde — Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  )
}
