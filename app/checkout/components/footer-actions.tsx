"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface FooterActionsProps {
  step: number
  totalSteps: number
  onPrev: () => void
  onNext: () => void
}

export function FooterActions({ step, totalSteps, onPrev, onNext }: FooterActionsProps) {
  return (
    <div className="border-t border-purple-200 dark:border-purple-700 px-8 md:px-10 py-6 bg-purple-50 dark:bg-purple-900 flex gap-3 justify-between">
      {step > 1 && (
        <button
          onClick={onPrev}
          className="flex items-center gap-2 text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-medium transition-all duration-200 hover:gap-3"
        >
          <ChevronLeft className="w-5 h-5" />
          Voltar
        </button>
      )}

      {step < totalSteps && (
        <button
          onClick={onNext}
          className="ml-auto flex items-center gap-2 bg-primary hover:bg-purple-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-0.5 active:translate-y-0"
        >
          Próximo
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  )
}
