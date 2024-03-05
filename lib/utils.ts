import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isServer() {
  return typeof window === "undefined"
}

export function coincapUrl(path: string) {
  return `https://api.coincap.io/v2${path}`
}

export function coinGeckoUrl(path: string) {
  return `https://api.coingecko.com/api/v3${path}`
}

export function formatCurrency(amount: number, currency = "usd") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount)
}

export function formatPercent(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatNumber(amount: number) {
  return new Intl.NumberFormat("en-US").format(amount)
}
