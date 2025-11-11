"use client";

import { CONTACT_MESSAGE, KNOW_MORE, WPP_NUMBER } from "@/contants/whatsapp";
import BenemedLogoColorido from "@/public/logo-benemed-colorido.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground p-4 text-center text-sm">
        <span className="font-medium">Solicite um atendimento personalizado </span>
        <a href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(KNOW_MORE)}`} className="text-primary-foreground font-medium bg-secondary py-2 px-4 shadow rounded-lg hover:bg-white hover:text-blue-300 cursor-pointer" target="_blank">
          Saiba mais
        </a>
      </div>

      <header className={`border-b bg-card transition-all duration-300 ${isFixed ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3">
            <div className="flex items-center gap-2">
              <Image src={BenemedLogoColorido} alt="Logo benemed" className="w-40" />
            </div>

            <nav className="hidden md:flex justify-center items-center gap-8">
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">Planos</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">F.A.Q.</a>
              <a href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`} target="_blank" className="text-foreground hover:text-primary transition-colors flex">Contato <ArrowUpRight className="opacity-50" size={12}/></a>
            </nav>

            <div className="flex items-center gap-4 justify-end">

              {/* botões ou alguma outra coisa */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
