import { cn } from '@/lib/utils'
import NavWatch from '@/components/nav-watch'

export const metadata = {}

export default function WatchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container">
      <NavWatch />
      {children}
    </div>
  )
}
