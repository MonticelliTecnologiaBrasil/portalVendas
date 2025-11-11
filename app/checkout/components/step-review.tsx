"use client"

interface StepReviewProps {
  data: {
    nome: string
    cpf: string
    email: string
    telefone: string
    endereco: string
    cidade: string
    valor: number
    agencia: string
    conta: string
    digito: string
  }
  isPaying: boolean
  onPayment: () => void
}

export function StepReview({ data, isPaying, onPayment }: StepReviewProps) {
  return (
    <div className="text-center space-y-6">
      <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
        <p className="text-purple-700 dark:text-purple-300 mb-4">Confira seus dados antes de finalizar o pagamento:</p>
        <div className="text-left space-y-2 text-sm text-purple-600 dark:text-purple-400 overflow-y-auto">
          <div className="flex justify-between">
            <span className="font-medium">Nome:</span>
            <span>{data.nome || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">CPF:</span>
            <span>{data.cpf || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Email:</span>
            <span>{data.email || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Telefone:</span>
            <span>{data.telefone || "-"}</span>
          </div>
          <div className="border-t border-purple-200 dark:border-purple-600 my-3 pt-3" />
          <div className="flex justify-between">
            <span className="font-medium">Endereço:</span>
            <span>{data.endereco || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Cidade:</span>
            <span>{data.cidade || "-"}</span>
          </div>
          <div className="border-t border-purple-200 dark:border-purple-600 my-3 pt-3" />
          <div className="flex justify-between">
            <span className="font-medium">Valor:</span>
            <span>R$ {data.valor?.toFixed(2) || "-"}</span>
          </div>
          <div className="border-t border-purple-200 dark:border-purple-600 my-3 pt-3" />
          <div className="flex justify-between">
            <span className="font-medium">Agência:</span>
            <span>{data.agencia || "-"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Conta:</span>
            <span>{data.conta && data.digito ? `${data.conta}-${data.digito}` : "-"}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onPayment}
        disabled={isPaying}
        className="w-full bg-primary hover:bg-purple-600 disabled:bg-purple-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 disabled:shadow-none transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {isPaying ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Processando...
          </span>
        ) : (
          "Concluir"
        )}
      </button>
    </div>
  )
}
