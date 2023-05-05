'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export default function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ThemeProvider attribute="class" {...props}>
      {children}
    </ThemeProvider>
  )
}
