import '@/style/globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import Provider from '@/components/provider'
import Toaster from '../components/toaster'
import { cn } from '@/lib/utils'

import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontHeading = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  variable: '--font-heading',
})

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `% | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React.js', 'Tailwind CSS', 'Movie'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          fontHeading.variable,
          inter.variable
        )}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
