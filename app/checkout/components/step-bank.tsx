"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type React from "react"
import { FormGrid } from "./form-grid"
import { FormInput } from "./form-input"

interface StepBankProps {
  data: {
    bancoId: number | string
    agencia: string
    conta: string
    digito: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StepBank({ data, onChange }: StepBankProps) {
  const handleBancoChange = (value: string) => {
    const finalValue =
      value === "0"
        ? "Dados de cliente não identificado ou não preenchidos"
        : value

    const event = {
      target: {
        name: "bancoId",
        value: finalValue,
      },
    } as unknown as React.ChangeEvent<HTMLInputElement>

    onChange(event)
  }

  return (
    <FormGrid>
      <Select
        value={String(data.bancoId || "")}
        onValueChange={handleBancoChange}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione um banco" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Itaú Unibanco S.A.</SelectItem>
          <SelectItem value="2">Caixa Econômica Federal</SelectItem>
          <SelectItem value="3">Sem banco</SelectItem>
          <SelectItem value="4">Monbank</SelectItem>
          <SelectItem value="5">Monseguros</SelectItem>
          <SelectItem value="0">
            Dados de cliente não identificado ou não preenchidos
          </SelectItem>
        </SelectContent>
      </Select>

      <FormInput
        name="agencia"
        placeholder="Agência"
        value={data.agencia}
        onChange={onChange}
        required
      />
      <FormInput
        name="conta"
        placeholder="Conta"
        value={data.conta}
        onChange={onChange}
        required
      />
      <FormInput
        name="digito"
        placeholder="Dígito"
        value={data.digito}
        onChange={onChange}
        required
      />
    </FormGrid>
  )
}
