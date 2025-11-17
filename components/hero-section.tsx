import HappyFamily from '@/public/familia-feliz.png'
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-20 w-56 h-56 md:w-72 md:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -right-32 w-72 h-72 md:w-96 md:h-96 bg-blue-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }}></div>
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-24 right-1/3 w-48 h-48 md:w-64 md:h-64 bg-pink-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-16 w-44 h-44 md:w-56 md:h-56 bg-green-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              Saia da fila do <span className="text-primary">SUS</span> e encontre o{" "}
              <span className="text-primary">benefício</span> perfeito para sua família
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                className="text-lg px-8 py-3 bg-primary text-white rounded-lg cursor-pointer shadow-md hover:bg-primary/90 transition w-full sm:w-auto text-center"
                href="#planos"
              >
                Consulte nossos planos
              </a>
            </div>
          </div>

          <div className="relative grid place-items-center">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-blue-300/20 rounded-full blur-2xl -bottom-20 -left-10"></div>
            <div className="absolute w-52 h-52 md:w-64 md:h-64 bg-purple-300/30 rounded-full blur-2xl -top-10 -right-10" style={{ animationDelay: "2s" }}></div>
            <div className="absolute w-40 h-40 md:w-48 md:h-48 bg-primary/15 rounded-full blur-xl top-1/2 -left-5"></div>

            <div className="relative hidden md:block z-20 w-full max-w-lg mx-auto">
              <Image
                alt="Familia feliz"
                src={HappyFamily}
                className="object-cover w-full h-auto rounded-2xl shadow-2xl"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            <span className="absolute w-32 h-32 md:w-40 md:h-40 bg-blue-400/30 -bottom-10 right-12 rounded-full blur-xl"></span>
          </div>
        </div>
      </div>
    </section>
  )
}
