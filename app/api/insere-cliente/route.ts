import { db } from "@/lib/db";

function isValidCPF(cpf: string) {
  return /^[0-9]{11}$/.test(cpf);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[0-9]{8,15}$/.test(phone);
}

export async function POST(req: Request) {
  const client = await db.connect();

  try {
    const body = await req.json();

    if (!body.cpf) return Response.json({ error: "CPF é obrigatório" }, { status: 400 });
    if (!body.nome) return Response.json({ error: "Nome é obrigatório" }, { status: 400 });
    if (!body.telefone) return Response.json({ error: "Telefone é obrigatório" }, { status: 400 });
    if (!body.email) return Response.json({ error: "Email é obrigatório" }, { status: 400 });

    if (!isValidCPF(body.cpf)) {
      return Response.json({ error: "CPF inválido — use 11 dígitos numéricos" }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return Response.json({ error: "Email inválido" }, { status: 400 });
    }

    if (!isValidPhone(body.telefone)) {
      return Response.json({ error: "Telefone inválido" }, { status: 400 });
    }

    if (typeof body.nome !== "string" || body.nome.length < 3) {
      return Response.json({ error: "Nome deve ter pelo menos 3 caracteres" }, { status: 400 });
    }

    const checkCpf = await db.query(
      "SELECT id FROM clientes WHERE cpf = $1",
      [body.cpf]
    );

    await client.query("BEGIN");

    if (checkCpf.rows.length > 0) {
      await db.query(`UPDATE clientes SET nome = $1 where id = ${checkCpf.rows[0].id}`, [body.nome])
      await db.query(`UPDATE clientes_contatos SET telefone = $1, email = $2 where id_cliente = ${checkCpf.rows[0].id}`, [body.telefone, body.email])
      return Response.json({ok: true, message: "Dados do cliente atualizado com sucesso"}, {status: 200})
    }

    const createClient = await client.query(
      "INSERT INTO clientes (cpf, nome) VALUES ($1, $2) RETURNING id",
      [body.cpf, body.nome]
    );

    const idCliente = createClient.rows[0]?.id;

    if (!idCliente) {
      throw new Error("Falha ao criar cliente");
    }

    await client.query(
      "INSERT INTO clientes_contatos (id_cliente, telefone, email) VALUES ($1, $2, $3)",
      [idCliente, body.telefone, body.email]
    );

    await client.query("COMMIT");

    return Response.json({ ok: true, id_cliente: idCliente });

  } catch (error) {
    console.error("ERRO NO INSERT:", error);

    await client.query("ROLLBACK");

    return Response.json(
      { error: "Erro ao inserir cliente", details: (error as Error).message },
      { status: 500 }
    );
  } finally {
    client.release();
  }
}
