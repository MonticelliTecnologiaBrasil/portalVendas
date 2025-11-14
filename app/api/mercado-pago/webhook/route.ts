import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { data, type } = await request.json()

    // Webhook de notificação de pagamento
    if (type === "payment") {
      console.log(" Pagamento recebido:", data)

      // Aqui você pode:
      // 1. Salvar informações do pagamento no banco de dados
      // 2. Enviar e-mail de confirmação
      // 3. Criar a conta do usuário
      // 4. Ativar o plano contratado
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(" Erro ao processar webhook:", error)
    return NextResponse.json({ error: "Erro ao processar webhook" }, { status: 500 })
  }
}
