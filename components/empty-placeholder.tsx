import React from 'react'
import { cn } from '@/lib/utils'
import { Icons } from './icons'

interface EmptyPlaceholder extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
function EmptyPlaceholder({ children, className, ...props }: EmptyPlaceholder) {
  return (
    <div
      className={cn(
        'flex min-h-[90vh] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-500',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface EmptyPlaceholderIcon extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons
}

EmptyPlaceholder.icon = function EmptyPlaceholderIcon({
  children,
  className,
  name,
  ...props
}: EmptyPlaceholderIcon) {
  const Icon = Icons[name]
  return (
    <div className="flex w-20 h-20 bg-muted items-center justify-center rounded-full">
      <Icon className={cn('w-10 h-10 ', className)} {...props} />
    </div>
  )
}

interface EmptyPlaceholderTitle
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

EmptyPlaceholder.title = function EmptyPlaceholderTitle({
  children,
  className,
  ...props
}: EmptyPlaceholderTitle) {
  return (
    <p className={cn('mt-6 text-xl font-semibold', className)} {...props}>
      {children}
    </p>
  )
}

interface EmptyPlaceholderText
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

EmptyPlaceholder.text = function EmptyPlaceholderText({
  children,
  className,
  ...props
}: EmptyPlaceholderText) {
  return (
    <p
      className="mb-8 mt-2 text-center text-sm font-normal leading-6 text-muted-foreground"
      {...props}
    >
      {children}
    </p>
  )
}

export default EmptyPlaceholder
