"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MercadoPagoButton({ plan_id }: { plan_id?: string }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !(window as any).$MPC_loaded) {
      const script = document.createElement("script");
      script.src = `${window.location.protocol}//secure.mlstatic.com/mptools/render.js`;
      script.async = true;
      document.body.appendChild(script);
      (window as any).$MPC_loaded = true;
    }
  }, []);

  const handleCheckout = () => {
    if (!accepted) return;
    window.open(
      `https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=${plan_id}`,
      "_blank"
    );
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="bg-primary text-center text-white px-4 py-2 rounded-lg w-full hover:bg-primary-foreground hover:text-purple-600 hover:border-purple-600 hover:border-2 border-2 border-transparent"
        >
          Contratar
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="z-50 fixed inset-0 bg-black/40 data-[state=open]:animate-fade-in" />
        <Dialog.Content
          className="fixed z-50 top-1/2 left-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-lg focus:outline-none data-[state=open]:animate-slide-up"
        >
          <div className="flex justify-between items-start mb-4">
            <Dialog.Title className="text-xl font-semibold text-gray-900">
              Termos de Uso
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Description className="text-sm text-gray-700 max-h-60 overflow-y-auto mb-4">
            <p>
              Ao prosseguir, você concorda com os Termos e Condições de Uso do
              serviço, incluindo políticas de cobrança, cancelamento e
              privacidade.
            </p>
            <p className="mt-2">
              Recomendamos que leia atentamente todos os detalhes antes de
              continuar com a assinatura.
            </p>
          </Dialog.Description>

          <div className="flex items-center mb-4">
            <input
              id="terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mr-2 h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="terms" className="text-sm text-gray-800 flex gap-1">
              Li e aceito os <Link href="/pdfs/Termos_e_Condicoes_Benemed.pdf" target="_blank" className="text-primary flex ">termos de uso <ArrowUpRight size={12} /></Link>
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <Dialog.Close asChild>
              <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100">
                Cancelar
              </button>
            </Dialog.Close>

            <Dialog.Close asChild>
              <button
                onClick={handleCheckout}
                className={`px-4 py-2 rounded-lg text-white ${
                  accepted
                    ? "bg-primary"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!accepted}
              >
                Continuar
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
