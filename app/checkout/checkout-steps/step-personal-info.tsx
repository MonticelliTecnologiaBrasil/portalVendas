"use client"

interface PersonalInfoData {
  cpf: string // Adicionado CPF
  name: string
  email: string
  phone: string
}

interface StepPersonalInfoProps {
  data: PersonalInfoData
  onChange: (data: PersonalInfoData) => void
  errors?: Record<string, string>
  showCpf?: boolean // Adicionado prop para mostrar/ocultar CPF
}

export function StepPersonalInfo({ data, onChange, errors = {}, showCpf = true }: StepPersonalInfoProps) {
  const handleChange = (field: keyof PersonalInfoData, value: string) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  const formatCPF = (cpf: string) => {
    const cleaned = cpf.replace(/\D/g, '')
    if (cleaned.length <= 3) return cleaned
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}.${cleaned.slice(3)}`
    if (cleaned.length <= 9) return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6)}`
    return `${cleaned.slice(0, 3)}.${cleaned.slice(3, 6)}.${cleaned.slice(6, 9)}-${cleaned.slice(9, 11)}`
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Seus dados pessoais</h3>
        <p className="text-sm text-muted-foreground">Precisamos dessas informações para criar sua assinatura</p>
      </div>

      <div className="space-y-4">
        {showCpf && (
          <div className="space-y-2">
            <label htmlFor="cpf" className="block text-sm font-medium">
              CPF *
            </label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formatCPF(data.cpf)}
              onChange={(e) => handleChange("cpf", e.target.value.replace(/\D/g, ''))}
              maxLength={14}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                errors.cpf
                  ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                  : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
              }`}
              aria-invalid={!!errors.cpf}
              aria-describedby={errors.cpf ? "cpf-error" : undefined}
            />
            {errors.cpf && (
              <p id="cpf-error" className="text-sm font-medium text-destructive">
                {errors.cpf}
              </p>
            )}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Nome completo *
          </label>
          <input
            id="name"
            type="text"
            placeholder="João Silva"
            value={data.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.name
                ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
            }`}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-sm font-medium text-destructive">
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            E-mail *
          </label>
          <input
            id="email"
            type="email"
            placeholder="joao@example.com"
            value={data.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.email
                ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
            }`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm font-medium text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Telefone *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            value={data.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.phone
                ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
            }`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm font-medium text-destructive">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
