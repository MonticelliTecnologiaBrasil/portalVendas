"use client";

import { useEffect } from "react";

export default function MercadoPagoButton({ plan_id }: {plan_id?: string}) {
  useEffect(() => {
    // Evita carregar mais de uma vez
    if (typeof window !== "undefined" && !(window as any).$MPC_loaded) {
      const script = document.createElement("script");
      script.src = `${window.location.protocol}//secure.mlstatic.com/mptools/render.js`;
      script.async = true;
      document.body.appendChild(script);
      (window as any).$MPC_loaded = true;
    }
  }, []);

  return (
    <a
      href={`https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=${plan_id}`}
      target="_blank"
      className="bg-primary text-center text-white px-4 py-2 rounded-lg w-full hover:bg-primary-foreground hover:text-purple-600 hover:border-purple-600 hover:border-2 border-2 border-transparent"
    >
      Contratar
      {/* você pode trocar o texto para 'Comprar', 'Assinar' etc */}
    </a>
  );
}
