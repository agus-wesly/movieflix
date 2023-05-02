import './globals.css'
import { Inter } from 'next/font/google'

import Provider from '@/components/provider'
import Toaster from '../components/toaster'

import { siteConfig } from '@/config/site'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}

          <Toaster />
        </Provider>
      </body>
    </html>
  )
}
