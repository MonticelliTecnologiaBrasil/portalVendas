interface HeaderProps {
  title: string
  step: number
  totalSteps: number
}

export function Header({ title, step, totalSteps }: HeaderProps) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-purple-900 dark:text-white text-center">{title}</h1>
      <p className="text-center text-purple-500 dark:text-purple-400">
        Etapa {step} de {totalSteps}
      </p>
    </div>
  )
}
