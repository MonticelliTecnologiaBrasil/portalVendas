"use client";

import { CONTACT_MESSAGE, KNOW_MORE, WPP_NUMBER } from "@/contants/whatsapp";
import BenemedLogoColorido from "@/public/logo-benemed-colorido.svg";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsFixed(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground p-4 text-center text-sm flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2">
        <span className="font-medium">Solicite um atendimento personalizado</span>

        <a
          href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(KNOW_MORE)}`}
          className="text-primary-foreground font-medium bg-secondary py-2 px-4 shadow rounded-lg hover:bg-white hover:text-blue-300 transition-colors"
          target="_blank"
        >
          Saiba mais
        </a>
      </div>

      {/* Header */}
      <header
        className={`border-b bg-card transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 shadow-md z-50" : ""
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Image
              src={BenemedLogoColorido}
              alt="Logo benemed"
              className="w-36 sm:w-40"
            />

            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-center items-center gap-8">
              <a href="#planos" className="text-foreground hover:text-primary transition-colors">
                Planos
              </a>

              <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                F.A.Q.
              </a>

              <a
                href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`}
                target="_blank"
                className="text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Contato <ArrowUpRight className="opacity-50" size={12} />
              </a>
            </nav>

            {/* Desktop Button + Mobile Menu Button */}
            <div className="flex items-center gap-4">

              {/* Botão Desktop */}
              <Link href={"https://portal.benemedsaude.com.br"} target="_blank" className="hidden md:block">
                <Button>Já sou cliente</Button>
              </Link>

              {/* Menu Mobile */}
              <button
                className="md:hidden p-2"
                aria-label="Abrir menu"
                onClick={() => setOpenMenu(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMenu(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-card shadow-xl z-[60] p-6 flex flex-col gap-6 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>

          <button
            aria-label="Fechar menu"
            onClick={() => setOpenMenu(false)}
            className="p-2"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="flex flex-col gap-4 text-lg">
          <a href="#planos" className="hover:text-primary" onClick={() => setOpenMenu(false)}>
            Planos
          </a>

          <a href="#faq" className="hover:text-primary" onClick={() => setOpenMenu(false)}>
            F.A.Q.
          </a>

          <a
            href={`https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`}
            target="_blank"
            className="flex items-center gap-1 hover:text-primary"
            onClick={() => setOpenMenu(false)}
          >
            Contato <ArrowUpRight size={12} />
          </a>
        </nav>

        <Link href={"https://portal.benemedsaude.com.br"} target="_blank" onClick={() => setOpenMenu(false)}>
          <Button className="w-full">Já sou cliente</Button>
        </Link>
      </aside>
    </>
  );
}
