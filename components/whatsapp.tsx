import { Button } from "@/components/ui/button"
import { CONTACT_MESSAGE, WPP_NUMBER } from "@/contants/whatsapp"
import { MessageCircleMore } from "lucide-react"

export function WhatsAppFloat() {
  
  const whatsappUrl = `https://wa.me/${WPP_NUMBER}?text=${encodeURIComponent(CONTACT_MESSAGE)}`

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
      <Button
        size="icon"
        className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
      
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
          
          <MessageCircleMore size={20} className="text-white relative z-10" />
        </a>
      </Button>
   </div>
  )
}