import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { payer_email, card_token_id, plan_id, plan_price } = await request.json()

    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-2650418305658524-111409-696b22997519f2981a63c9e6fe3bc793-2989164016"

    if (!accessToken) {
      return NextResponse.json({ error: 'Configuração indisponível' }, { status: 500 })
    }
    
    const preapprovalData = {
      preapproval_plan_id: `${plan_id}`,
      reason: `Assinatura de Plano - ID: ${plan_id}`,
      external_reference: `health_plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      payer_email: payer_email,
      card_token_id: card_token_id,
      back_url: `http://localhost:3000/checkout/success`,
      status: 'authorized',
    }

    console.log("xalamatanga: ", preapprovalData)

    const response = await fetch('https://api.mercadopago.com/preapproval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(preapprovalData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.log(errorData)
      return NextResponse.json(
        { error: 'Erro ao criar assinatura', details: errorData },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(' Erro ao criar pré-aprovação:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
