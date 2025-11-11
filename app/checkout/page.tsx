"use client"

import { useEffect, useState } from "react"
import { CheckoutContainer } from "./components/checkout-container"

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (typeof window !== "undefined" && !(window as any).$MPC_loaded) {
      const script = document.createElement("script")
      script.src = `${window.location.protocol}//secure.mlstatic.com/mptools/render.js`
      script.async = true
      document.body.appendChild(script)
        ; (window as any).$MPC_loaded = true
    }
  }, [])

  const handlePayment = async (formData: any) => {
    const [ano, mes, dia] = formData.dataNascimento.split("-");
    const dataNascimento = `${dia}/${mes}/${ano}`;
    try {
      const payload = {
        cliente: {
          cpf: formData.cpf,
          dataNascimento: String(dataNascimento),
          nome: formData.nome,
          bancoId: Number(formData.bancoId),
          agencia: formData.agencia,
          conta: formData.conta,
          digito: formData.digito,
        },
        parceiro: {
          codigoParceiro: Number(formData.codigoParceiro),
        },
        endereco: {
          endereco: formData.endereco,
          complemento: formData.complemento,
          bairro: formData.bairro,
          uf: formData.uf,
          cep: formData.cep,
          cidade: formData.cidade,
        },
        produto: {
          valor: Number(formData.valor),
          produtoContratado: Number(formData.produtoContratado),
          diaVencimento: Number(formData.diaVencimento),
        },
        contato: {
          telefone: formData.telefone,
          email: formData.email,
        },
      };

      const response = await fetch("https://portalparceiro.holdingffh.com.br/api/contratos/criar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Erro ao criar contrato");

      console.log("Contrato criado com sucesso:", result);
      alert("Contrato criado com sucesso!");
    } catch (error: any) {
      console.error(error);
      alert("Falha ao criar contrato");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 p-4 flex items-center justify-center">
      <CheckoutContainer onPayment={handlePayment} />
    </div>
  )
}
