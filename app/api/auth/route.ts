// app/api/auth/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const body = {
      client_secret: process.env.MP_CLIENT_SECRET,
      client_id: process.env.MP_CLIENT_ID,
      grant_type: process.env.MP_GRANT_TYPE,
      code: process.env.MP_CODE,
      code_verifier: process.env.MP_CODE_VERIFIER,
      redirect_uri: process.env.MP_REDIRECT_URI,
      refresh_token: process.env.MP_REFRESH_TOKEN,
      test_token: 'false',
    };

    const res = await fetch('https://api.mercadopago.com/oauth/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Erro ao gerar access_token:', data);
      return NextResponse.json({ error: data }, { status: res.status });
    }

    process.env.MP_ACCESS_TOKEN = data.access_token;

    return NextResponse.json({ access_token: data.access_token });
  } catch (error) {
    console.error('Erro interno:', error);
    return NextResponse.json({ error: 'Erro interno ao gerar token' }, { status: 500 });
  }
}
