"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, User, Users, Building, MapPin, Heart, Calculator } from "lucide-react"

interface QuoteData {
  planType: "individual" | "familiar" | "empresarial" | ""
  age: string
  dependents: number
  city: string
  coverage: string[]
  budget: string
  personalInfo: {
    name: string
    email: string
    phone: string
    cpf: string
  }
}

export function QuoteWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quoteData, setQuoteData] = useState<QuoteData>({
    planType: "",
    age: "",
    dependents: 0,
    city: "",
    coverage: [],
    budget: "",
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
    },
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateQuoteData = (field: string, value: any) => {
    setQuoteData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const updatePersonalInfo = (field: string, value: string) => {
    setQuoteData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }))
  }

  const toggleCoverage = (coverage: string) => {
    setQuoteData((prev) => ({
      ...prev,
      coverage: prev.coverage.includes(coverage)
        ? prev.coverage.filter((c) => c !== coverage)
        : [...prev.coverage, coverage],
    }))
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8 border-0 shadow-2xl bg-card/90 backdrop-blur">
        <div className="space-y-8">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>
                Etapa {currentStep} de {totalSteps}
              </span>
              <span>{Math.round(progress)}% concluído</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Step 1: Plan Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Que tipo de plano você precisa?</h2>
                <p className="text-muted-foreground">Selecione a opção que melhor se adequa à sua situação</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { id: "individual", icon: User, title: "Individual", desc: "Apenas para você" },
                  { id: "familiar", icon: Users, title: "Familiar", desc: "Para você e sua família" },
                  { id: "empresarial", icon: Building, title: "Empresarial", desc: "Para sua empresa" },
                ].map((option) => (
                  <Card
                    key={option.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      quoteData.planType === option.id ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => updateQuoteData("planType", option.id)}
                  >
                    <div className="text-center space-y-3">
                      <option.icon
                        className={`h-12 w-12 mx-auto ${
                          quoteData.planType === option.id ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                      <h3 className="font-semibold">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Age and Dependents */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Informações básicas</h2>
                <p className="text-muted-foreground">Precisamos saber sua idade para calcular o valor</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Sua idade</label>
                  <select
                    value={quoteData.age}
                    onChange={(e) => updateQuoteData("age", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione sua faixa etária</option>
                    <option value="18-25">18 a 25 anos</option>
                    <option value="26-35">26 a 35 anos</option>
                    <option value="36-45">36 a 45 anos</option>
                    <option value="46-55">46 a 55 anos</option>
                    <option value="56-65">56 a 65 anos</option>
                    <option value="65+">Acima de 65 anos</option>
                  </select>
                </div>

                {quoteData.planType === "familiar" && (
                  <div className="space-y-3">
                    <label className="text-sm font-medium">Número de dependentes</label>
                    <select
                      value={quoteData.dependents}
                      onChange={(e) => updateQuoteData("dependents", Number.parseInt(e.target.value))}
                      className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value={0}>Nenhum dependente</option>
                      <option value={1}>1 dependente</option>
                      <option value={2}>2 dependentes</option>
                      <option value={3}>3 dependentes</option>
                      <option value={4}>4 ou mais dependentes</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Location */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Onde você mora?</h2>
                <p className="text-muted-foreground">A localização influencia na rede credenciada disponível</p>
              </div>

              <div className="max-w-md mx-auto space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" />
                  <label className="text-sm font-medium">Cidade</label>
                </div>
                <select
                  value={quoteData.city}
                  onChange={(e) => updateQuoteData("city", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Selecione sua cidade</option>
                  <option value="sao-paulo">São Paulo - SP</option>
                  <option value="rio-janeiro">Rio de Janeiro - RJ</option>
                  <option value="belo-horizonte">Belo Horizonte - MG</option>
                  <option value="brasilia">Brasília - DF</option>
                  <option value="salvador">Salvador - BA</option>
                  <option value="fortaleza">Fortaleza - CE</option>
                  <option value="curitiba">Curitiba - PR</option>
                  <option value="recife">Recife - PE</option>
                  <option value="porto-alegre">Porto Alegre - RS</option>
                  <option value="outras">Outras cidades</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 4: Coverage Preferences */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Que tipo de cobertura você precisa?</h2>
                <p className="text-muted-foreground">Selecione os benefícios mais importantes para você</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { id: "emergencia", title: "Emergência 24h", desc: "Atendimento de urgência" },
                  { id: "internacao", title: "Internações", desc: "Apartamento ou enfermaria" },
                  { id: "exames", title: "Exames", desc: "Laboratoriais e imagem" },
                  { id: "cirurgias", title: "Cirurgias", desc: "Procedimentos cirúrgicos" },
                  { id: "odonto", title: "Odontologia", desc: "Tratamentos dentários" },
                  { id: "telemedicina", title: "Telemedicina", desc: "Consultas online" },
                  { id: "psicologia", title: "Psicologia", desc: "Saúde mental" },
                  { id: "fisioterapia", title: "Fisioterapia", desc: "Reabilitação" },
                  { id: "internacional", title: "Cobertura Internacional", desc: "Viagens ao exterior" },
                ].map((coverage) => (
                  <Card
                    key={coverage.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-lg ${
                      quoteData.coverage.includes(coverage.id) ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => toggleCoverage(coverage.id)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-sm">{coverage.title}</h3>
                        {quoteData.coverage.includes(coverage.id) && (
                          <Heart className="h-4 w-4 text-primary fill-primary" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{coverage.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Budget */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Qual seu orçamento mensal?</h2>
                <p className="text-muted-foreground">Isso nos ajuda a encontrar as melhores opções para você</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "ate-200", title: "Até R$ 200", desc: "Planos básicos" },
                  { id: "200-400", title: "R$ 200 - R$ 400", desc: "Planos intermediários" },
                  { id: "400-600", title: "R$ 400 - R$ 600", desc: "Planos premium" },
                  { id: "acima-600", title: "Acima de R$ 600", desc: "Planos executivos" },
                ].map((budget) => (
                  <Card
                    key={budget.id}
                    className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                      quoteData.budget === budget.id ? "border-primary bg-primary/5" : "border-border"
                    }`}
                    onClick={() => updateQuoteData("budget", budget.id)}
                  >
                    <div className="text-center space-y-2">
                      <h3 className="font-semibold">{budget.title}</h3>
                      <p className="text-sm text-muted-foreground">{budget.desc}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Personal Information */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Seus dados para contato</h2>
                <p className="text-muted-foreground">Precisamos dessas informações para enviar sua cotação</p>
              </div>

              <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-medium">Nome completo</label>
                  <input
                    type="text"
                    value={quoteData.personalInfo.name}
                    onChange={(e) => updatePersonalInfo("name", e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">E-mail</label>
                  <input
                    type="email"
                    value={quoteData.personalInfo.email}
                    onChange={(e) => updatePersonalInfo("email", e.target.value)}
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">Telefone</label>
                  <input
                    type="tel"
                    value={quoteData.personalInfo.phone}
                    onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium">CPF</label>
                  <input
                    type="text"
                    value={quoteData.personalInfo.cpf}
                    onChange={(e) => updatePersonalInfo("cpf", e.target.value)}
                    placeholder="000.000.000-00"
                    className="w-full px-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="px-12 py-6 text-lg">
                  <Calculator className="mr-2 h-5 w-5" />
                  Gerar Minha Cotação
                </Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Ao continuar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>

            {currentStep < totalSteps && (
              <Button
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !quoteData.planType) ||
                  (currentStep === 2 && !quoteData.age) ||
                  (currentStep === 3 && !quoteData.city) ||
                  (currentStep === 4 && quoteData.coverage.length === 0) ||
                  (currentStep === 5 && !quoteData.budget)
                }
                className="flex items-center gap-2"
              >
                Próximo
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
