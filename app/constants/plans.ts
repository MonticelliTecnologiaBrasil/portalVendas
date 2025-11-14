
export interface Plan {
  id?: string
  name: string
  operator?: string
  type: string 
  price: number
  originalPrice?: number
  coverage?: string[]
  highlights?: string[]
  network?: string
  popular?: boolean
  bestValue?: boolean
  plan_id?: string
  warning?: string[]
}

export const plans = [
  {
    id: "2",
    name: "Essencial",
    type: "Individual",
    price: 64.9,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial",
      "Acidentes Pessoais R$ 10 mil",
      "Assistência funeral R$ 5 mil",
    ],
    plan_id: "a4d4fb207be54499bf949b1ad72d524e"
  },
  {
    id: "20",
    name: "Protege",
    type: "Individual",
    price: 84.9,
    popular: true,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial",
      "Assistência PET",
      "Acidentes Pessoais R$ 10 mil",
      "Assistência funeral R$ 5 mil",
    ],
    plan_id: "6523d7e0f65648fb95ff19db8ef84e99"
  },
  {
    id: "16",
    name: "Premium",
    type: "Individual",
    price: 120.0,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial",
      "Assistência PET",
      "Check-up completo",
      "Acidentes Pessoais R$ 10 mil",
      "Assistência funeral R$ 5 mil",
    ],
    plan_id: "ee6c7a34b5dd462e8d310fe860128e08"
  }, {
    id: "35",
    name: "Essencial",
    type: "Familiar",
    price: 104.9,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistências Residencial*",
      "Acidentes Pessoais R$ 10 mil**",
      "Assistência funeral R$ 5 mil**"
    ],
    warning: [
      "* Assistência Residencial: Disponível para o titular.",
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado."
    ],
    plan_id: "a82f597d79e943de9bb6df26d339bade"
  },
  {
    id: "13",
    name: "Protege",
    type: "Familiar",
    popular: true,
    price: 131.9,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial *",
      "Assistência PET *",
      "Acidentes Pessoais R$ 10 mil**",
      "Assistência funeral R$ 5 mil**",
    ],
    warning: [
      "* Assistência Pet: Disponível para o o PET do Titular/Segurado. Válido para cães e gatos com idade até 8 anos.  Um pet por CPF. Assistência Residencial: Disponível para o titular.",
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado."
    ],
    plan_id: "eeaaa617ab3e455593685d8aaeee55d5"
  },
  {
    id: "15",
    name: "Premium",
    type: "Familiar",
    price: 215.0,
    highlights: [
      "Orientação Saúde + Telemedicina",
      "Descontos em medicamentos",
      "Descontos em consultas e exames",
      "Assistência Residencial *",
      "Assistência PET *",
      "Check-up completo",
      "Acidentes Pessoais R$ 10 mil **",
      "Assistência funeral R$ 5 mil **",
    ],
    warning: [
      "* Assistência Pet: Disponível para o o PET do Titular/Segurado. Válido para cães e gatos com idade até 8 anos.  Um pet por CPF. Assistência Residencial: Disponível para o titular.",
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado."
    ],
    plan_id: "a4d4fb207be54499bf949b1ad72d524e"
  },
]