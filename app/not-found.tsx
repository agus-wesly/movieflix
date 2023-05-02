import EmptyPlaceholder from '@/components/empty-placeholder'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function NotFound() {
  return (
    <EmptyPlaceholder className="max-w-4-xl">
      <EmptyPlaceholder.icon name="danger" />

      <EmptyPlaceholder.title>Ooops, not found</EmptyPlaceholder.title>

      <EmptyPlaceholder.text>
        We cannot find the page that you are looking for :(
      </EmptyPlaceholder.text>

      <a className={cn(buttonVariants({ variant: 'ghost' }))} href="/">
        Back
      </a>
    </EmptyPlaceholder>
  )
}
