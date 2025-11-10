import type { ReactNode } from "react"

interface FormGridProps {
  children: ReactNode
  columns?: 1 | 2
}

export function FormGrid({ children, columns = 1 }: FormGridProps) {
  const gridClass = columns === 2 ? "grid grid-cols-2 gap-3" : "space-y-4"

  return <div className={gridClass}>{children}</div>
}
