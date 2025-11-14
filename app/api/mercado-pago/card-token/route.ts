import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log(process.env.MERCADO_PAGO_ACCESS_TOKEN)
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN || "APP_USR-2650418305658524-111409-696b22997519f2981a63c9e6fe3bc793-2989164016"
    if (!accessToken) {
      return NextResponse.json({ error: 'Configuração indisponível' }, { status: 500 })
    }
    const response = await fetch('https://api.mercadopago.com/v1/card_tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return NextResponse.json({ error: 'Erro ao tokenizar cartão', details: errorData }, { status: response.status })
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error(' Erro ao tokenizar cartão:', error)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
