"use client"

import type React from "react"
import { FormGrid } from "./form-grid"
import { FormInput } from "./form-input"

interface StepPersonalProps {
  data: {
    nome: string
    cpf: string
    dataNascimento: string
    email: string
    telefone: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StepPersonal({ data, onChange }: StepPersonalProps) {
  return (
    <FormGrid>
      <FormInput name="nome" placeholder="Nome completo" value={data.nome} onChange={onChange} required />
      <FormInput name="cpf" placeholder="CPF" value={data.cpf} onChange={onChange} required />
      <FormInput type="date" name="dataNascimento" value={data.dataNascimento} onChange={onChange} required />
      <FormInput name="email" placeholder="E-mail" value={data.email} onChange={onChange} type="email" required />
      <FormInput name="telefone" placeholder="Telefone" value={data.telefone} onChange={onChange} required />
    </FormGrid>
  )
}
