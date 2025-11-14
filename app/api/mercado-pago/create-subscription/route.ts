import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      plan_id,
      plan_name,
      plan_price,
      payer_email,
      payer_name,
      payer_phone,
      card_number,
      card_holder,
      card_expiry,
      card_cvv,
    } = body

    // Validar dados obrigatórios
    if (
      !plan_id ||
      !plan_name ||
      !plan_price ||
      !payer_email ||
      !payer_name ||
      !card_number ||
      !card_holder ||
      !card_expiry ||
      !card_cvv
    ) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
    }

    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-2650418305658524-111409-696b22997519f2981a63c9e6fe3bc793-2989164016"
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001"

    if (!accessToken) {
      console.error(" MERCADO_PAGO_ACCESS_TOKEN não configurado")
      return NextResponse.json({ error: "Configuração de pagamento indisponível" }, { status: 500 })
    }

    // Parsing da validade (MM/AA -> 2025-01-01)
    const [month, year] = card_expiry.split("/")
    const fullYear = `20${year}`
    const startDate = new Date(Number.parseInt(fullYear), Number.parseInt(month) - 1, 1)
    const endDate = new Date(Number.parseInt(fullYear) + 1, Number.parseInt(month) - 1, 1)

    // Preparar dados da assinatura recorrente
    const preapprovalData = {
      preapproval_plan_id: `plan_${plan_id}`,
      reason: `Assinatura de ${plan_name}`,
      external_reference: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      payer_email: payer_email,
      card_token_id: `token_${card_number.slice(-4)}_${Date.now()}`, // Simplificado - em produção usar Mercado Pago JS SDK
      auto_recurring: {
        frequency: 1,
        frequency_type: "months",
        start_date: startDate.toISOString(),
        end_date: endDate.toISOString(),
        transaction_amount: plan_price,
        currency_id: "BRL",
      },
      back_url: `${appUrl}/checkout/success`,
      status: "authorized",
    }

    // Criar assinatura recorrente no Mercado Pago
    const response = await fetch("https://api.mercadopago.com/preapproval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preapprovalData),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error(" Erro ao criar assinatura:", errorData)
      return NextResponse.json(
        { error: "Erro ao criar assinatura recorrente", details: errorData },
        { status: response.status },
      )
    }

    const data = await response.json()

    // Retornar dados da assinatura criada
    return NextResponse.json({
      id: data.id,
      status: data.status,
      init_point: data.init_point || data.sandbox_init_point,
      payer_email: data.payer_email,
      auto_recurring: data.auto_recurring,
      external_reference: data.external_reference,
    })
  } catch (error) {
    console.error(" Erro interno ao criar assinatura:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
