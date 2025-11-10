import type { ReactNode } from "react"

interface StepContentProps {
  isAnimating: boolean
  children: ReactNode
}

export function StepContent({ isAnimating, children }: StepContentProps) {
  return (
    <div
      className={`transition-all duration-500 ${
        isAnimating ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
      }`}
    >
      {children}
    </div>
  )
}
