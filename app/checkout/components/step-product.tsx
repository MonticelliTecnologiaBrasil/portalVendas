"use client"

import type React from "react"
import { FormGrid } from "./form-grid"
import { FormInput } from "./form-input"

interface StepProductProps {
  data: {
    valor: number
    produtoContratado: number
    diaVencimento: number
    codigoParceiro: number
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StepProduct({ data, onChange }: StepProductProps) {
  return (
    <FormGrid>
      <FormInput
        type="text"
        name="valor"
        placeholder="Valor"
        value={data.valor}
        onChange={onChange}
        step="0.01"
        required
      />
      <FormInput
        type="text"
        name="produtoContratado"
        placeholder="Produto Contratado"
        value={data.produtoContratado}
        onChange={onChange}
        required
      />
      <FormInput
        type="text"
        name="diaVencimento"
        placeholder="Dia de Vencimento"
        value={data.diaVencimento}
        onChange={onChange}
        required
      />
      <FormInput
        type="text"
        name="codigoParceiro"
        placeholder="Código Parceiro"
        value={data.codigoParceiro}
        onChange={onChange}
        required
      />
    </FormGrid>
  )
}
