'use client'

import { CheckoutFormMultiStep } from "@/components/checkout-form-multi-step"
import { Header } from "@/components/header"

interface CheckoutPageProps {
  searchParams: Promise<{
    planId?: string
    type?: string
  }>
}

export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-balance">Finalize sua contratação</h1>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Preencha seus dados e escolha a forma de pagamento
          </p>
        </div>
        <CheckoutFormMultiStep initialPlanId={params.planId} initialType={params.type} />
      </div>
    </main>
  )
}
