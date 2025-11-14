// app/api/verify-card-token/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { card_token_id } = await req.json();

  const res = await fetch(`https://api.mercadopago.com/v1/card_tokens/${card_token_id}`, {
    headers: {
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
  });

  const data = await res.json();
  console.log("toke do cartão: ", data)
  return NextResponse.json({ status: res.status, data });
}
