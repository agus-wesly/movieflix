'use client'

import navItem from '@/constant/nav-items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import useLockBodyScroll from '@/hooks/useLockBody'

function SidebarMobile() {
  const pathname = usePathname()

  useLockBodyScroll()

  return (
    <div className="fixed inset-0 grid h-screen grid-flow-row auto-rows-max overflow-auto shadow-md  md:hidden z-50 top-14 animate-in slide-in-from-left-16">
      <div className="relative z-20 grid rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <nav className="grid auto-rows-max">
          {navItem.map((nav, i) => (
            <div key={i} className="mb-8 space-y-1">
              <h3 className="font-semibold text-lg mb-2">{nav.title}</h3>
              <div className="grid gap-1 text-sm font-medium">
                {nav.items.length
                  ? nav.items.map((item) => (
                      <Link
                        className={cn(
                          'p-2 rounded hover:bg-accent hover:text-accent-foreground space-x-2',
                          pathname === item.href
                            ? 'bg-secondary'
                            : 'bg-transparent'
                        )}
                        key={item.href}
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    ))
                  : null}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default SidebarMobile
