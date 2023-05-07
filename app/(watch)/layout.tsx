import { cn } from '@/lib/utils'
import NavWatch from '@/components/nav-watch'

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
