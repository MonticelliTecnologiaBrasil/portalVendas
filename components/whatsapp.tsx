import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const phoneNumber = "5551981606487"
  const message = "Olá! Gostaria de mais informações sobre os planos de saúde."
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <Button
        size="icon"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Fale conosco no WhatsApp"
        >
          {/* Efeito de pulso ao redor do ícone */}
          <div className="absolute inset-0 rounded-full bg-green-500/30 animate-ping-slow group-hover:animate-none"></div>
          
          <MessageCircle className="h-7 w-7 text-white relative z-10" />
        </a>
      </Button>

      {/* Tooltip flutuante */}
      <div className="absolute -top-12 -left-20 bg-primary text-primary-foreground px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-sm font-medium whitespace-nowrap">
          Fale conosco!
        </span>
        {/* Seta do tooltip */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
      </div>
    </div>
  )
}