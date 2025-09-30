import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Award, Clock, Shield, Users } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Encontre o <span className="text-primary">plano de saúde</span> perfeito para sua família
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Compare mais de 50 planos de saúde das melhores operadoras do Brasil. Cotação gratuita, atendimento
                especializado e contratação 100% online.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Fazer Cotação Gratuita
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                Ver Planos Disponíveis
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">+50.000 Clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Certificado ANS</span>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-2xl border-0 bg-card/80 backdrop-blur">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">Cotação Instantânea</h3>
                <p className="text-muted-foreground">Receba sua cotação em menos de 2 minutos</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Nome</label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Idade</label>
                    <select className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Selecione</option>
                      <option>18-25 anos</option>
                      <option>26-35 anos</option>
                      <option>36-45 anos</option>
                      <option>46-55 anos</option>
                      <option>56+ anos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <input
                    type="tel"
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Cidade</label>
                  <select className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option>Selecione sua cidade</option>
                    <option>São Paulo - SP</option>
                    <option>Rio de Janeiro - RJ</option>
                    <option>Belo Horizonte - MG</option>
                    <option>Brasília - DF</option>
                    <option>Outras</option>
                  </select>
                </div>

                <Button className="w-full py-6 text-lg font-semibold">
                  <Clock className="mr-2 h-5 w-5" />
                  Receber Cotação Agora
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao continuar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
