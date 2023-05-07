import '@/style/globals.css'
import { Inter } from 'next/font/google'

import Provider from '@/components/provider'
import Toaster from '../components/toaster'
import Footer from '@/components/footer'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Provider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
