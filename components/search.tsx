'use client'

import React from 'react'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

interface SearchForm extends React.HTMLAttributes<HTMLFormElement> {}

function SearchComponent({ className, ...props }: SearchForm) {
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (inputRef.current) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          inputRef.current.focus()
        }
      }
    }

    document.addEventListener('keydown', down)

    return () => document.removeEventListener('keydown', down)
  }, [])

  type FormEvent = React.FormEvent<HTMLFormElement> & {
    target: {
      search: {
        value: string
      }
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const searchQuery = e.target.search.value

    router.push(`/search?query=${searchQuery.toLowerCase()}`)
  }

  return (
    <form
      className={cn('w-full flex relative text-muted-foreground', className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <Input
        ref={inputRef}
        name="search"
        className="text-foreground"
        type="text"
        placeholder="Search movie..."
      />

      <kbd className="border hidden absolute top-2 right-2 sm:flex items-center text-[10px] px-1 rounded">
        <span className="text-sm mr-2">⌘</span>K
      </kbd>
    </form>
  )
}

export default SearchComponent
