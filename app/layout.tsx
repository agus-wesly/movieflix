import '@/style/globals.css'
import { Inter } from 'next/font/google'

import Provider from '@/components/provider'
import Toaster from '../components/toaster'
import Footer from '@/components/footer'

import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `% | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React.js', 'Tailwind CSS', 'Movie'],
  verification: {
    google: 'fym6Pr38d-8SbaoZo5nfG3xkLoLWjJerjoeYH8NfB1E',
    },
  },
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
          'min-h-screen bg-background font-sans antialiased max-w-screen overflow-x-hidden',
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
