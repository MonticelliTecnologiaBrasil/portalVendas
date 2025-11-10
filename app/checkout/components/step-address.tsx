"use client"

import type React from "react"
import { useEffect } from "react"
import { FormGrid } from "./form-grid"
import { FormInput } from "./form-input"

interface StepAddressProps {
  data: {
    endereco: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    cep: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function StepAddress({ data, onChange }: StepAddressProps) {
  useEffect(() => {
    const cep = data.cep.replace(/\D/g, "") // remove caracteres não numéricos

    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((dados) => {
          if (!dados.erro) {
            // Cria eventos sintéticos para atualizar o estado pai via onChange
            const fakeEvent = (name: string, value: string) =>
            ({
              target: { name, value },
            } as React.ChangeEvent<HTMLInputElement>)

            onChange(fakeEvent("endereco", dados.logradouro || ""))
            onChange(fakeEvent("bairro", dados.bairro || ""))
            onChange(fakeEvent("cidade", dados.localidade || ""))
            onChange(fakeEvent("uf", dados.uf || ""))
          }
        })
        .catch(() => {
          console.error("Erro ao buscar o CEP.")
        })
    }
  }, [data.cep])

  return (
    <FormGrid>
      <FormInput
        name="cep"
        placeholder="CEP"
        value={data.cep}
        onChange={onChange}
        required
        maxLength={9}
      />
      <FormInput
        name="endereco"
        placeholder="Endereço"
        value={data.endereco}
        onChange={onChange}
        required
      />
      <FormInput
        name="complemento"
        placeholder="Complemento"
        value={data.complemento}
        onChange={onChange}
      />
      <FormInput
        name="bairro"
        placeholder="Bairro"
        value={data.bairro}
        onChange={onChange}
        required
      />

      <FormGrid columns={2}>
        <FormInput
          name="uf"
          placeholder="UF"
          value={data.uf}
          onChange={onChange}
          required
        />
        <FormInput
          name="cidade"
          placeholder="Cidade"
          value={data.cidade}
          onChange={onChange}
          required
        />
      </FormGrid>
    </FormGrid>
  )
}
