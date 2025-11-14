'use client'

interface DocumentBankData {
  cpf: string
  dataNascimento: string
  bancoId: string
  agencia: string
  conta: string
  digito: string
}

interface StepDocumentBankProps {
  data: DocumentBankData
  onChange: (data: DocumentBankData) => void
  errors?: Record<string, string>
}

export function StepDocumentBank({ data, onChange, errors = {} }: StepDocumentBankProps) {
  const handleChange = (field: keyof DocumentBankData, value: string) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  const formatCPF = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length > 11) return numericValue.slice(0, 11)
    if (numericValue.length > 8) {
      return numericValue.slice(0, 3) + '.' + numericValue.slice(3, 6) + '.' + numericValue.slice(6, 9) + '-' + numericValue.slice(9, 11)
    }
    if (numericValue.length > 5) {
      return numericValue.slice(0, 3) + '.' + numericValue.slice(3, 6) + '.' + numericValue.slice(6)
    }
    if (numericValue.length > 2) {
      return numericValue.slice(0, 3) + '.' + numericValue.slice(3)
    }
    return numericValue
  }

  const formatDate = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length > 4) {
      return numericValue.slice(0, 2) + '/' + numericValue.slice(2, 4) + '/' + numericValue.slice(4, 8)
    }
    if (numericValue.length > 2) {
      return numericValue.slice(0, 2) + '/' + numericValue.slice(2)
    }
    return numericValue
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Documentação e Dados Bancários</h3>
        <p className="text-sm text-muted-foreground">Informações necessárias para processar sua assinatura</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="cpf" className="block text-sm font-medium">
              CPF *
            </label>
            <input
              id="cpf"
              type="text"
              placeholder="000.000.000-00"
              value={formatCPF(data.cpf)}
              onChange={(e) => handleChange('cpf', e.target.value.replace(/\D/g, ''))}
              maxLength={14}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                errors.cpf
                  ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
              }`}
            />
            {errors.cpf && <p className="text-sm font-medium text-destructive">{errors.cpf}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="dataNascimento" className="block text-sm font-medium">
              Data de Nascimento *
            </label>
            <input
              id="dataNascimento"
              type="text"
              placeholder="DD/MM/AAAA"
              value={formatDate(data.dataNascimento)}
              onChange={(e) => handleChange('dataNascimento', e.target.value.replace(/\D/g, ''))}
              maxLength={10}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                errors.dataNascimento
                  ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
              }`}
            />
            {errors.dataNascimento && <p className="text-sm font-medium text-destructive">{errors.dataNascimento}</p>}
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-semibold text-sm mb-4">Dados Bancários</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="bancoId" className="block text-sm font-medium">
                Banco *
              </label>
              <select
                id="bancoId"
                value={data.bancoId}
                onChange={(e) => handleChange('bancoId', e.target.value)}
                className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                  errors.bancoId
                    ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                    : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
                }`}
              >
                <option value="">Selecione um banco</option>
                <option value="1">Banco do Brasil</option>
                <option value="2">Caixa Econômica Federal</option>
                <option value="3">Bradesco</option>
                <option value="4">Itaú</option>
                <option value="5">Santander</option>
                <option value="6">Nubank</option>
                <option value="7">Inter</option>
              </select>
              {errors.bancoId && <p className="text-sm font-medium text-destructive">{errors.bancoId}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label htmlFor="agencia" className="block text-sm font-medium">
                  Agência *
                </label>
                <input
                  id="agencia"
                  type="text"
                  placeholder="12367"
                  value={data.agencia}
                  onChange={(e) => handleChange('agencia', e.target.value.replace(/\D/g, ''))}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                    errors.agencia
                      ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                      : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
                  }`}
                />
                {errors.agencia && <p className="text-sm font-medium text-destructive">{errors.agencia}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="conta" className="block text-sm font-medium">
                  Conta *
                </label>
                <input
                  id="conta"
                  type="text"
                  placeholder="567"
                  value={data.conta}
                  onChange={(e) => handleChange('conta', e.target.value.replace(/\D/g, ''))}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                    errors.conta
                      ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                      : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
                  }`}
                />
                {errors.conta && <p className="text-sm font-medium text-destructive">{errors.conta}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="digito" className="block text-sm font-medium">
                  Dígito *
                </label>
                <input
                  id="digito"
                  type="text"
                  placeholder="5"
                  value={data.digito}
                  onChange={(e) => handleChange('digito', e.target.value.replace(/\D/g, ''))}
                  maxLength={2}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                    errors.digito
                      ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                      : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
                  }`}
                />
                {errors.digito && <p className="text-sm font-medium text-destructive">{errors.digito}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
