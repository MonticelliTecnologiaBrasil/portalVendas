import { Check } from "lucide-react"

interface StepConfig {
  id: number
  label: string
  icon: string
}

interface ProgressIndicatorProps {
  steps: StepConfig[]
  currentStep: number
}

export function ProgressIndicator({ steps, currentStep }: ProgressIndicatorProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, index) => (
          <div key={s.id} className={`flex items-center ${index + 1 == steps.length ? '' : 'flex-1'}`}>
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full font-semibold text-sm transition-all duration-500 ${
                currentStep > s.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : currentStep === s.id
                    ? "bg-white text-purple-600 ring-2 ring-primary shadow-lg"
                    : "bg-purple-200 text-purple-500 dark:bg-purple-700 dark:text-purple-400"
              }`}
            >
              {currentStep > s.id ? <Check className="w-5 h-5" /> : <span className="text-base">{s.icon}</span>}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded-full transition-all duration-500 ${
                  currentStep > s.id ? "bg-primary" : "bg-purple-200 dark:bg-purple-700"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* <div className="flex justify-between text-center text-sm">
        {steps.map((s) => (
          <div
            key={s.id}
            className={`flex-1 transition-all duration-500 ${
              currentStep === s.id
                ? "text-purple-600 dark:text-purple-400 font-semibold"
                : currentStep > s.id
                  ? "text-purple-600 dark:text-purple-400"
                  : "text-purple-500 dark:text-purple-400"
            }`}
          >
            {s.label}
          </div>
        ))}
      </div> */}
    </div>
  )
}
