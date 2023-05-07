'use client'

import EmptyPlaceholder from '@/components/empty-placeholder'
import { Button, buttonVariants } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <EmptyPlaceholder className="max-w-4-xl">
      <EmptyPlaceholder.icon name="danger" />

      <EmptyPlaceholder.title>Ooops, not found</EmptyPlaceholder.title>

      <EmptyPlaceholder.text>
        We cannot find the page that you are looking for :(
      </EmptyPlaceholder.text>

      <Button onClick={() => router.back()} variant={'ghost'}>
        Back
      </Button>
    </EmptyPlaceholder>
  )
}
