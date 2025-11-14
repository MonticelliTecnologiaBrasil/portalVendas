import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDDMMYYYY(s: string) {
  const digits = String(s).replace(/\D/g, '');
  if (!/^\d{8}$/.test(digits)) throw new Error('Entrada deve ter 8 dígitos: DDMMYYYY');
  return `${digits.slice(0,2)}/${digits.slice(2,4)}/${digits.slice(4,8)}`;
}