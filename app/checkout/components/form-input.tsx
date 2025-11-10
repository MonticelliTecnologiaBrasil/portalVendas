import type React from "react"
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export function FormInput({ placeholder, ...props }: FormInputProps) {
  return (
    <input
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
      {...props}
    />
  )
}
