// components/MercadoPagoCheckoutButton.tsx
"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

interface MercadoPagoCheckoutButtonProps {
  preferenceId: string;
  label?: string;
  backgroundColor?: string;
  className?: string;
  /**
   * Callback chamado se ocorrer um erro ao inserir o botão.
   */
  onError?: (error: Error) => void;
  /**
   * Se true, não renderiza o widget e mostra apenas o fallback link.
   */
  disabled?: boolean;
}

export default function MercadoPagoCheckoutButton({
  preferenceId,
  label = "Contratar agora",
  backgroundColor = "#FF6600",
  className = "",
  onError,
  disabled = false,
}: MercadoPagoCheckoutButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentPrefRef = useRef<string | null>(null);
  const uidRef = useRef(`mp-btn-${Math.random().toString(36).slice(2, 8)}`);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    if (disabled) {
      containerRef.current.innerHTML = "";
      currentPrefRef.current = null;
      return;
    }

    if (currentPrefRef.current === preferenceId && containerRef.current.childElementCount > 0) {
      return;
    }

    if (!preferenceId) {
      const err = new Error("preferenceId ausente no MercadoPagoCheckoutButton");
      onError?.(err);
      return;
    }

    try {
      containerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.src = "https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      script.setAttribute("data-source", "button");
      script.setAttribute("data-button-label", label);
      script.setAttribute("data-button-background-color", backgroundColor);
      script.id = `${uidRefRef()}-pref-${preferenceId}`;

      containerRef.current.appendChild(script);

      currentPrefRef.current = preferenceId;
    } catch (err: any) {
      onError?.(err instanceof Error ? err : new Error(String(err)));
    }

    function uidRefRef() {
      return uidRef.current;
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }

    };
  }, [preferenceId, sdkLoaded, label, backgroundColor, disabled]);

  return (
    <>
      <Script
        id={`mp-sdk-${uidRef.current}`}
        src="https://www.mercadopago.com.br/integrations/v1/web-payment-checkout.js"
        strategy="afterInteractive"
        onLoad={() => setSdkLoaded(true)}
        onError={(e) => {
          setSdkLoaded(false);
          onError?.(new Error("Falha ao carregar SDK do Mercado Pago"));
          console.error("Erro ao carregar SDK do Mercado Pago:", e);
        }}
      />

      <div
        ref={containerRef}
        className={`w-full flex justify-center ${className}`}
        aria-live="polite"
        aria-busy={disabled ? "true" : "false"}
        data-mp-widget-id={uidRef.current}
      >
        <noscript>
          <div>
            <a
              href={`https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=${encodeURIComponent(
                preferenceId
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          </div>
        </noscript>
      </div>
    </>
  );
}
