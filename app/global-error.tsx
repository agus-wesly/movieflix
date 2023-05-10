'use client'
import EmptyPlaceholder from '@/components/empty-placeholder'
import NavHome from '@/components/nav-home'
import { Button } from '@/components/ui/button'

export default function GlobalError({
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <html>
      <body>
        <NavHome />

        <EmptyPlaceholder className="max-w-4-xl">
          <EmptyPlaceholder.icon name="danger" />

          <EmptyPlaceholder.text>Something went wrong!</EmptyPlaceholder.text>

          <Button onClick={() => reset()}>Try again</Button>
        </EmptyPlaceholder>
      </body>
    </html>
  )
}
