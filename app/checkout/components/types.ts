export type FormData = {
  // cliente
  nome: string
  cpf: string
  dataNascimento: string
  // contato
  email: string
  telefone: string
  // endereco
  endereco: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  cep: string
  // produto
  valor: number
  produtoContratado: number
  diaVencimento: number
  // parceiro
  codigoParceiro: number
  // banco
  bancoId: number
  agencia: string
  conta: string
  digito: string
}

export interface StepConfig {
  id: number
  label: string
  icon: string
}
