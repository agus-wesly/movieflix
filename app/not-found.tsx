'use client'

import EmptyPlaceholder from '@/components/empty-placeholder'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import NavHome from '@/components/nav-home'

export default function NotFound() {
  const router = useRouter()
  return (
    <>
      <NavHome />
      <EmptyPlaceholder className="max-w-4-xl">
        <EmptyPlaceholder.icon name="danger" />

        <EmptyPlaceholder.title>Ooops, not found</EmptyPlaceholder.title>

        <EmptyPlaceholder.text>
          We cannot find the page that you are looking for :(
        </EmptyPlaceholder.text>

        <Button
          onClick={() => {
            router.push('/')
            window.location.reload()
          }}
          variant={'ghost'}
        >
          Back to main page
        </Button>
      </EmptyPlaceholder>
    </>
  )
}
