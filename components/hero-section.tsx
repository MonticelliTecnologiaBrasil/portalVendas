import HappyFamily from '@/public/familia-feliz.png'
import Image from "next/image"
import { Button } from './ui/button'

export function HeroSection() {
  return (
    <section id="contato" className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-10 relative">
      {/* Blobs de fundo principais */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-20 right-1/3 w-64 h-64 bg-pink-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-green-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Saia da fila do <span className="text-primary">SUS</span> e encontre o <span className="text-primary">benefício</span> perfeito para sua família
              </h1>
              {/* <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Compare mais de 50 planos de saúde das melhores operadoras do Brasil. Cotação gratuita, atendimento
                especializado e contratação 100% online.
              </p> */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="text-lg px-8 py-6 relative overflow-hidden group"> */}
              {/* Efeito de blob no botão principal */}
              {/* <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></span> */}
              {/* <span className="relative z-10">Fazer Cotação Gratuita</span> */}
              {/* </Button> */}

              <Button size="lg" className="text-lg px-8 py-6 relative overflow-hidden group">
                Consulte nossos planos
              </Button>
            </div>

            {/* <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/30 rounded-lg px-3 py-2">
                <div className="p-1 bg-primary/10 rounded-full">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/30 rounded-lg px-3 py-2">
                <div className="p-1 bg-primary/10 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">+50.000 Clientes</span>
              </div>
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/30 rounded-lg px-3 py-2">
                <div className="p-1 bg-primary/10 rounded-full">
                  <Award className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Certificado ANS</span>
              </div>
            </div> */}
          </div>

          <div className="relative grid place-items-center">
            <div className="absolute w-80 h-80 bg-blue-300/20 rounded-full blur-2xl -bottom-20 -left-10 "></div>
            <div className="absolute w-64 h-64 bg-purple-300/30 rounded-full blur-2xl -top-10 -right-10 " style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-48 h-48 bg-primary/15 rounded-full blur-xl top-1/2 -left-5"></div>

            <span className="absolute w-20 h-20 bg-blue-300/40 z-40 -bottom-72 left-40 rounded-full shadow-2xl backdrop-blur-sm "></span>
            <span className="absolute w-30 h-30 bg-blue-400/40 z-40 -bottom-5 left-0 rounded-full shadow-2xl backdrop-blur-sm " style={{ animationDelay: '2s' }}></span>

            {/* Imagem principal */}
            <div className="relative z-20">
              <Image
                alt="Familia feliz"
                src={HappyFamily}
                className="object-cover max-w-2xl h-[500px] rounded-2xl shadow-2xl backdrop-blur-sm"
              />
              {/* Efeito de brilho na imagem */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Blobs restantes */}
            <span className="absolute w-40 h-40 bg-blue-400/30 -bottom-14 right-20 rounded-full shadow-2xl backdrop-blur-sm "></span>
          </div>
        </div>
      </div>
    </section>
  )
}