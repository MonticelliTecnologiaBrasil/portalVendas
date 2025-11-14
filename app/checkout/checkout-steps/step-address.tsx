'use client'


interface AddressData {
  endereco: string
  complemento: string
  bairro: string
  uf: string
  cep: string
  cidade: string
}

interface StepAddressProps {
  data: AddressData
  onChange: (data: AddressData) => void
  errors?: Record<string, string>
}

export function StepAddress({ data, onChange, errors = {} }: StepAddressProps) {
  const handleChange = (field: keyof AddressData, value: string) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  const formatCEP = (value: string) => {
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length > 5) {
      return numericValue.slice(0, 5) + '-' + numericValue.slice(5, 8)
    }
    return numericValue
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Endereço de entrega</h3>
        <p className="text-sm text-muted-foreground">Onde você deseja receber a documentação do plano</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="cep" className="block text-sm font-medium">
            CEP *
          </label>
          <input
            id="cep"
            type="text"
            placeholder="12345-678"
            value={formatCEP(data.cep)}
            onChange={(e) => handleChange('cep', e.target.value.replace(/\D/g, ''))}
            maxLength={9}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.cep
                ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
            }`}
          />
          {errors.cep && <p className="text-sm font-medium text-destructive">{errors.cep}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="endereco" className="block text-sm font-medium">
            Rua *
          </label>
          <input
            id="endereco"
            type="text"
            placeholder="Rua Luiz Fernando Veríssimo"
            value={data.endereco}
            onChange={(e) => handleChange('endereco', e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.endereco
                ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
            }`}
          />
          {errors.endereco && <p className="text-sm font-medium text-destructive">{errors.endereco}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="complemento" className="block text-sm font-medium">
            Complemento
          </label>
          <input
            id="complemento"
            type="text"
            placeholder="Apto 123, Sala 5"
            value={data.complemento}
            onChange={(e) => handleChange('complemento', e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring/50"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="bairro" className="block text-sm font-medium">
              Bairro *
            </label>
            <input
              id="bairro"
              type="text"
              placeholder="Santa Fé"
              value={data.bairro}
              onChange={(e) => handleChange('bairro', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                errors.bairro
                  ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
              }`}
            />
            {errors.bairro && <p className="text-sm font-medium text-destructive">{errors.bairro}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="cidade" className="block text-sm font-medium">
              Cidade *
            </label>
            <input
              id="cidade"
              type="text"
              placeholder="Gravataí"
              value={data.cidade}
              onChange={(e) => handleChange('cidade', e.target.value)}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
                errors.cidade
                  ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                  : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
              }`}
            />
            {errors.cidade && <p className="text-sm font-medium text-destructive">{errors.cidade}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="uf" className="block text-sm font-medium">
            Estado *
          </label>
          <select
            id="uf"
            value={data.uf}
            onChange={(e) => handleChange('uf', e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.uf
                ? 'border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50'
                : 'border-input focus:outline-none focus:ring-2 focus:ring-ring/50'
            }`}
          >
            <option value="">Selecione um estado</option>
            {['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'].map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.uf && <p className="text-sm font-medium text-destructive">{errors.uf}</p>}
        </div>
      </div>
    </div>
  )
}
