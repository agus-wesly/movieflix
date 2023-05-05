'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Icons } from './icons'
import { useTheme } from 'next-themes'

import { useState, useEffect } from 'react'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {theme === 'dark' ? (
          <Icons.dark />
        ) : theme === 'light' ? (
          <Icons.light />
        ) : (
          <Icons.system />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <span>
            <Icons.light className="w-5 h-5 mr-5" />
          </span>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <span>
            <Icons.dark className="w-5 h-5 mr-5" />
          </span>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <span>
            <Icons.system className="w-5 h-5 mr-5" />
          </span>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
