
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
  details?: {
    title: string
    text: string
  }[]
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
    plan_id: "76abcf4849334126ab659b597bfafbfe",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text:
          "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina, disponível 24 horas por dia, todos os dias da semana. O atendimento é realizado de forma online, por profissionais de enfermagem e médicos qualificados, garantindo agilidade e comodidade no cuidado com a saúde. O beneficiário pode entrar em contato a qualquer momento para tirar dúvidas, receber orientações ou ser direcionado a uma consulta médica por vídeo. Quando necessário, o médico realiza o atendimento por meio de um link seguro, enviado diretamente por SMS ou WhatsApp. Todo o serviço é conduzido de acordo com as normas da Lei Geral de Proteção de Dados (LGPD) e do Código de Ética Médica, assegurando total sigilo e proteção das informações do paciente.",
      },
      {
        title: "Desconto em Medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80% sobre o Preço Máximo ao Consumidor (PMC)*, em uma ampla rede de farmácias e drogarias conveniadas em todo o país. Com cobertura nacional, presente nos 26 estados e no Distrito Federal, o benefício garante economia, praticidade e acesso facilitado a medicamentos essenciais. Para utilizar, basta dirigir-se a uma farmácia da rede credenciada, apresentar um documento com foto e CPF ou a Carteirinha Digital Benemed, e informar ao atendente o autorizador indicado na carteirinha. O desconto será aplicado automaticamente após a validação no sistema. A ativação do benefício é feita apenas na primeira utilização, pelo aplicativo ou portal Benemed Saúde.*Os percentuais de desconto podem variar de acordo com o medicamento e a farmácia conveniada.",
      },
      {
        title: "Assistência Residencial",
        text: `Para os problemas do dia a dia!
    • Manutenção e reparos gratuitos;
    • Assistência 24h;
    • Mão de obra e indicação de profissionais;
    • 5 serviços disponíveis;
    • 2 eventos/ano R$150 por serviço previsto e R$100 por emergencial).`,
      },
      {
        title: "Desconto em consulta e exames",
        text: `Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames, procedimentos médicos, odontológicos e de bem-estar presenciais com descontos de até 80% em todo o território nacional.
O serviço oferece atendimento ilimitado, em caráter eletivo, com uma ampla rede de clínicas e laboratórios credenciados. No plano familiar, é possível incluir até 3 dependentes, sem necessidade de vínculo e sem limite de idade.`,
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
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
    plan_id: "8659356b2bb74ce6881670f4138b4a95",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text:
          "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina, disponível 24 horas por dia, todos os dias da semana. O atendimento é realizado de forma online, por profissionais de enfermagem e médicos qualificados, garantindo agilidade e comodidade no cuidado com a saúde. O beneficiário pode entrar em contato a qualquer momento para tirar dúvidas, receber orientações ou ser direcionado a uma consulta médica por vídeo. Quando necessário, o médico realiza o atendimento por meio de um link seguro, enviado diretamente por SMS ou WhatsApp. Todo o serviço é conduzido de acordo com as normas da Lei Geral de Proteção de Dados (LGPD) e do Código de Ética Médica, assegurando total sigilo e proteção das informações do paciente.",
      },
      {
        title: "Descontos em medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80% sobre o Preço Máximo ao Consumidor (PMC)*, em uma ampla rede de farmácias e drogarias conveniadas em todo o país. Com cobertura nacional, presente nos 26 estados e no Distrito Federal, o benefício garante economia, praticidade e acesso facilitado a medicamentos essenciais. Para utilizar, basta dirigir-se a uma farmácia da rede credenciada, apresentar um documento com foto e CPF ou a Carteirinha Digital Benemed, e informar ao atendente o autorizador indicado na carteirinha. O desconto será aplicado automaticamente após a validação no sistema. A ativação do benefício é feita apenas na primeira utilização, pelo aplicativo ou portal Benemed Saúde. *Os percentuais de desconto podem variar de acordo com o medicamento e a farmácia conveniada.",
      },
      {
        title: "Descontos em consultas e exames",
        text:
          "Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames, procedimentos médicos, odontológicos e de bem-estar presenciais com descontos de até 80% em todo o território nacional. O serviço oferece atendimento ilimitado, em caráter eletivo, com uma ampla rede de clínicas e laboratórios credenciados.",
      },
      {
        title: "Assistência Residencial",
        text:
          "Para os problemas do dia a dia! • Manutenção e reparos gratuitos; • Assistência 24h; • Mão de obra e indicação de profissionais; • 5 serviços disponíveis; • 2 eventos/ano R$150 por serviço previsto e R$100 por emergencial).",
      },
      {
        title: "Assistência PET",
        text:
          "Eles fazem parte da família e merecem todo o cuidado! Com a Assistência Pet Benemed, seu animal de estimação conta com apoio, segurança e conveniência sempre que precisar. O serviço oferece orientações e suporte em situações emergenciais ou de rotina, garantindo mais tranquilidade para o tutor e bem-estar para o pet. Disponível no plano individual, a assistência contempla um pet por titular, com acesso fácil e rápido aos serviços inclusos. Porque cuidar de quem amamos vai muito além das pessoas, é também proteger quem está sempre ao nosso lado.",
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
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
    plan_id: "0c4728aad9dc460c823445643d46f8f6",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text:
          "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina, disponível 24 horas por dia, todos os dias da semana. O atendimento é realizado de forma online, por profissionais de enfermagem e médicos qualificados, garantindo agilidade e comodidade no cuidado com a saúde...",
      },
      {
        title: "Descontos em medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80% sobre o Preço Máximo ao Consumidor (PMC)*...",
      },
      {
        title: "Descontos em consultas e exames",
        text:
          "Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames, procedimentos médicos...",
      },
      {
        title: "Assistência Residencial",
        text:
          "Para os problemas do dia a dia! • Manutenção e reparos gratuitos; • Assistência 24h...",
      },
      {
        title: "Assistência PET",
        text:
          "Eles fazem parte da família e merecem todo o cuidado! Com a Assistência Pet Benemed...",
      },
      {
        title: "Check-up completo",
        text:
          "O Check-up Completo Benemed Saúde foi desenvolvido para facilitar o cuidado preventivo com a sua saúde...",
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
  },
  {
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
      "Assistência funeral R$ 5 mil**",
    ],
    warning: [
      "* Assistência Residencial: Disponível para o titular.",
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado.",
    ],
    plan_id: "3d5c7423026d43528191f3431fc0f9d3",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text: "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina...",
      },
      {
        title: "Descontos em medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80%...",
      },
      {
        title: "Descontos em consultas e exames",
        text: "Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames...",
      },
      {
        title: "Assistências Residencial",
        text:
          "Para os problemas do dia a dia! • Manutenção e reparos gratuitos; • Assistência 24h...",
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
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
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado.",
    ],
    plan_id: "5a5e11a7ffc744c1bf6f99a87bbadb86",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text: "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina...",
      },
      {
        title: "Descontos em medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80%...",
      },
      {
        title: "Descontos em consultas e exames",
        text: "Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames...",
      },
      {
        title: "Assistência Residencial",
        text: "Para os problemas do dia a dia! • Manutenção e reparos gratuitos...",
      },
      {
        title: "Assistência PET",
        text:
          "Eles fazem parte da família e merecem todo o cuidado! Com a Assistência Pet Benemed...",
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
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
      "** Seguro Acidentes Pessoais e Assistência Funeral: Disponível para o Titular/Segurado.",
    ],
    plan_id: "109e4e226fce4d889569a25621459b09",
    details: [
      {
        title: "Orientação Saúde + Telemedicina",
        text: "A Benemed Saúde oferece o serviço de Orientação Saúde + Telemedicina...",
      },
      {
        title: "Descontos em medicamentos",
        text:
          "A Assistência de Medicamentos Benemed Saúde oferece descontos de até 80%...",
      },
      {
        title: "Descontos em consultas e exames",
        text: "Com o Agendamento Saúde Benemed, você tem acesso a consultas, exames...",
      },
      {
        title: "Assistência Residencial",
        text: "Para os problemas do dia a dia! • Manutenção e reparos gratuitos...",
      },
      {
        title: "Assistência PET",
        text:
          "Eles fazem parte da família e merecem todo o cuidado! Com a Assistência Pet Benemed...",
      },
      {
        title: "Check-up completo",
        text:
          "O Check-up Completo Benemed Saúde foi desenvolvido para facilitar o cuidado preventivo...",
      },
      {
        title: "Acidentes Pessoais R$ 10 mil",
        text: `O Seguro de Acidentes Pessoais Benemed Saúde oferece proteção e tranquilidade para o dia a dia, garantindo segurança financeira em casos de imprevistos.
Esse benefício assegura ao titular cobertura em situações de acidente que resultem em morte acidental ou invalidez permanente ou parcial, proporcionando suporte e amparo em momentos inesperados.
Coberturas e Capitais Segurados:
•	Morte Acidental: R$ 10.000,00
•	Invalidez Permanente ou Parcial por Acidente: R$ 10.000,00
Com o Seguro de Acidentes Pessoais Benemed, você e sua família contam com mais segurança e proteção para o futuro.`,
      },
      {
        title: "Assistência funeral R$ 5 mil",
        text: `A Assistência Funeral Individual Benemed Saúde garante amparo e tranquilidade em um dos momentos mais delicados, cobrindo todas as despesas relacionadas ao funeral do segurado, em caso de falecimento por causa natural ou acidental.
O serviço inclui a prestação completa de assistência, com cobertura de até R$ 5.000,00, destinada à organização e realização do funeral.
Itens inclusos:
•	Atendimento social e psicológico à família;
•	Transporte para liberação do corpo;
•	Organização completa para funeral, cremação ou sepultamento.
Com a Assistência Funeral Benemed, o beneficiário e sua família contam com apoio, respeito e cuidado em um momento que exige sensibilidade e segurança.
`,
      },
    ],
  },
];
