'use client'

import navItem from '@/constant/nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="w-full sticky top-0 py-8 px-4 hidden bg-popover text-popover-foreground md:flex flex-col gap-4 h-[99vh] overflow-auto border-r">
      {navItem.map((nav, i) => (
        <div className="mb-8 space-y-1" key={i}>
          <h3 className="font-semibold text-lg mb-2">{nav.title}</h3>
          <div className="grid gap-1 text-sm font-medium">
            {nav.items.length
              ? nav.items.map((item) => (
                  <Link
                    className={cn(
                      'p-2 rounded space-x-2',
                      pathname === item.href
                        ? 'bg-secondary'
                        : 'bg-transparent',
                      item.disabled
                        ? 'cursor-not-allowed text-muted-foreground opacity-60'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    )}
                    href={item.disabled ? '#' : item.href}
                    key={item.href}
                  >
                    {item.title}
                  </Link>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
