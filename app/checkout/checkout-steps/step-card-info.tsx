"use client"

import { AlertCircle } from "lucide-react"

interface CardInfoData {
  cardNumber: string
  cardHolder: string
  expiryDate: string
  cvv: string
}

interface StepCardInfoProps {
  data: CardInfoData
  onChange: (data: CardInfoData) => void
  errors?: Record<string, string>
}

export function StepCardInfo({ data, onChange, errors = {} }: StepCardInfoProps) {
  const handleChange = (field: keyof CardInfoData, value: string) => {
    onChange({
      ...data,
      [field]: value,
    })
  }

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim()
  }

  const formatExpiryDate = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue.length >= 2) {
      return numericValue.slice(0, 2) + "/" + numericValue.slice(2, 4)
    }
    return numericValue
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Dados do cartão</h3>
        <p className="text-sm text-muted-foreground">Sua informação será criptografada e segura</p>
      </div>

      <div className="flex gap-3 p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
        <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 mt-0.5" />
        <p className="text-xs text-blue-800 dark:text-blue-200">
          O pagamento é processado de forma segura pelo Mercado Pago
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="cardNumber" className="block text-sm font-medium">
            Número do cartão *
          </label>
          <input
            id="cardNumber"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={formatCardNumber(data.cardNumber)}
            onChange={(e) => handleChange("cardNumber", e.target.value.replace(/\s/g, ""))}
            maxLength={19}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors font-mono ${
              errors.cardNumber
                ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
            }`}
            aria-invalid={!!errors.cardNumber}
            aria-describedby={errors.cardNumber ? "cardNumber-error" : undefined}
          />
          {errors.cardNumber && (
            <p id="cardNumber-error" className="text-sm font-medium text-destructive">
              {errors.cardNumber}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="cardHolder" className="block text-sm font-medium">
            Titular do cartão *
          </label>
          <input
            id="cardHolder"
            type="text"
            placeholder="João Silva"
            value={data.cardHolder}
            onChange={(e) => handleChange("cardHolder", e.target.value)}
            className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors ${
              errors.cardHolder
                ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
            }`}
            aria-invalid={!!errors.cardHolder}
            aria-describedby={errors.cardHolder ? "cardHolder-error" : undefined}
          />
          {errors.cardHolder && (
            <p id="cardHolder-error" className="text-sm font-medium text-destructive">
              {errors.cardHolder}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="expiryDate" className="block text-sm font-medium">
              Validade *
            </label>
            <input
              id="expiryDate"
              type="text"
              placeholder="MM/AA"
              value={formatExpiryDate(data.expiryDate)}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              maxLength={5}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors font-mono ${
                errors.expiryDate
                  ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                  : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
              }`}
              aria-invalid={!!errors.expiryDate}
              aria-describedby={errors.expiryDate ? "expiryDate-error" : undefined}
            />
            {errors.expiryDate && (
              <p id="expiryDate-error" className="text-sm font-medium text-destructive">
                {errors.expiryDate}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="cvv" className="block text-sm font-medium">
              CVV *
            </label>
            <input
              id="cvv"
              type="password"
              placeholder="000"
              value={data.cvv}
              onChange={(e) => handleChange("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
              maxLength={4}
              className={`w-full px-4 py-2.5 rounded-lg border bg-background transition-colors font-mono ${
                errors.cvv
                  ? "border-destructive focus:outline-none focus:ring-2 focus:ring-destructive/50"
                  : "border-input focus:outline-none focus:ring-2 focus:ring-ring/50"
              }`}
              aria-invalid={!!errors.cvv}
              aria-describedby={errors.cvv ? "cvv-error" : undefined}
            />
            {errors.cvv && (
              <p id="cvv-error" className="text-sm font-medium text-destructive">
                {errors.cvv}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
