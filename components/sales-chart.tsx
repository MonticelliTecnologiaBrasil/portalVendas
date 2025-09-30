"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function SalesChart() {
  const data = [
    { month: "Jan", vendas: 45000, leads: 120 },
    { month: "Fev", vendas: 52000, leads: 145 },
    { month: "Mar", vendas: 48000, leads: 135 },
    { month: "Abr", vendas: 61000, leads: 168 },
    { month: "Mai", vendas: 55000, leads: 152 },
    { month: "Jun", vendas: 67000, leads: 189 },
    { month: "Jul", vendas: 72000, leads: 201 },
    { month: "Ago", vendas: 69000, leads: 195 },
    { month: "Set", vendas: 78000, leads: 218 },
    { month: "Out", vendas: 85000, leads: 235 },
    { month: "Nov", vendas: 89000, leads: 248 },
    { month: "Dez", vendas: 94000, leads: 267 },
  ]

  return (
    <Card className="p-6 border-0 shadow-lg bg-card/80 backdrop-blur">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Vendas e Leads</h3>
          <p className="text-sm text-muted-foreground">Evolução mensal dos resultados</p>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-green-600" />
          <Badge className="bg-green-100 text-green-800">+15.2% este mês</Badge>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Line
              type="monotone"
              dataKey="vendas"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
              name="Vendas (R$)"
            />
            <Line
              type="monotone"
              dataKey="leads"
              stroke="hsl(var(--chart-2))"
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
              name="Leads"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
