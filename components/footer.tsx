"use client"

import { Button } from "@/components/ui/button"
import { CONTACT_MESSAGE, WPP_NUMBER } from "@/contants/whatsapp"
import BenemedLogoColorido from "@/public/logo-benemed-colorido.svg"
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { WhatsAppFloat } from "./whatsapp"

// Tipagem opcional para manter consistência
export interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <>
      <footer className="bg-card border-t pt-14 pb-10">
        <div className="container mx-auto px-4">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pb-14 border-b">

            {/* Brand */}
            <div className="space-y-4 md:col-span-1">
              <Image
                src={BenemedLogoColorido}
                alt="Logo Benemed"
                className="w-32 sm:w-36"
              />
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                Cuidando da sua saúde com atendimento humano e transparente.
              </p>
            </div>

            {/* Menu */}
            <div className="sm:col-span-1">
              <h4 className="font-semibold mb-3">Menu</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#planos" className="hover:text-primary transition">
                    Planos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-primary transition">
                    F.A.Q.
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(
                      CONTACT_MESSAGE
                    )}`}
                    target="_blank"
                    className="hover:text-primary flex items-center gap-1 transition"
                  >
                    Contato <ArrowUpRight size={12} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Condições Gerais */}
            <div className="sm:col-span-1">
              <h4 className="font-semibold mb-3">Condições Gerais</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/pdfs/Condicoes_Gerais_Assistencia_Pet.pdf"
                    target="_blank"
                    className="hover:text-primary transition"
                  >
                    Assistência PET
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pdfs/Condicoes_Gerais_Assistencia_Residencial.pdf"
                    target="_blank"
                    className="hover:text-primary transition"
                  >
                    Assistência Residencial
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pdfs/Condicoes_Gerais_APC.pdf"
                    target="_blank"
                    className="hover:text-primary transition"
                  >
                    Acidentes Pessoais e Funeral
                  </Link>
                </li>
              </ul>
            </div>

            {/* Atendimento */}
            <div className="space-y-4 sm:col-span-1">
              <h4 className="font-semibold">Atendimento</h4>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[160px]">
                Fale agora com um especialista.
              </p>

              <Button className="w-full" asChild>
                <a
                  href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(
                    CONTACT_MESSAGE
                  )}`}
                  target="_blank"
                >
                  Falar no WhatsApp
                  <ArrowUpRight size={14} className="ml-1" />
                </a>
              </Button>
            </div>

            {/* Redes Sociais */}
            <div className="sm:col-span-1">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/company/benemedbr/"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://www.instagram.com/_benemed"
                  target="_blank"
                  className="hover:text-primary transition"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-center items-center pt-6 text-sm text-muted-foreground">
            <span>
              © {new Date().getFullYear()} Benemed Saúde — Todos os direitos
              reservados.
            </span>
          </div>
        </div>
      </footer>

      <WhatsAppFloat />
    </>
  )
}
