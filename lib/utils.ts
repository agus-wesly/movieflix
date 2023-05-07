import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { env } from '@/env.mjs'

type ImageVariant = 'small' | 'large'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formattedDate(input: string | number): string {
  const date = new Date(input)
  const formatted = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  if (formatted === 'Invalid Date') return '-'
  return formatted
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function getImageUrl({
  size,
  path,
}: {
  size: ImageVariant
  path: string
}) {
  const width = size === 'small' ? 220 : 300
  const height = size === 'small' ? 330 : 450
  return `${env.NEXT_PUBLIC_IMG_URL}/w${width}_and_h${height}_bestv2${path}`
}

export function getYearFromDate(date: string) {
  return new Date(date).getFullYear()
}

export function getDuration(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  const formattedHours = hours > 0 ? hours + 'h ' : ''
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + 'm' : ''
  return formattedHours + formattedMinutes
}
