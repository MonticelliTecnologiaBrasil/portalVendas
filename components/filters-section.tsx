import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Filter, SlidersHorizontal } from "lucide-react"

export function FiltersSection() {
  return (
    <section className="py-4 bg-background">
      <div className="container mx-auto px-4">
        <Card className="p-6 border-0 shadow-lg bg-card/80 backdrop-blur">
          <div className="flex items-center gap-3 mb-6">
            <SlidersHorizontal className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Filtrar Planos</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Tipo de Plano</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Individual
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Familiar
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Empresarial
                </Badge>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Operadora</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Unimed
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Bradesco
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  SulAmérica
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Amil
                </Badge>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Faixa de Preço</label>
              <div className="">
                <Slider defaultValue={[150, 600]} max={1000} min={100} step={10} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground mt-3">
                  <span>R$ 100</span>
                  <span>R$ 1.000</span>
                </div>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium">Cobertura</label>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Emergência
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Internação
                </Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  Odonto
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <Button variant="ghost" className="text-muted-foreground">
              Limpar Filtros
            </Button>
            <Button>
              <Filter className="mr-2 h-4 w-4" />
              Aplicar Filtros
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
