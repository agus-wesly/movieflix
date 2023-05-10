'use client'

import useIntersection from '@/hooks/useIntersecting'
import React, { useEffect } from 'react'
import type { UseInfiniteQueryResult } from '@tanstack/react-query'
import { Icons } from './icons'
import { cn } from '@/lib/utils'

type Props<T> = {
  query: UseInfiniteQueryResult<T, unknown>
  children: React.ReactNode | ((item: T) => React.ReactNode)
  fallback?: React.ReactNode
  className?: string
}

function InfiniteScroll<T>({
  query,
  children,
  fallback,
  className,
  ...rest
}: Props<T>) {
  const [isIntersecting, ref] = useIntersection<HTMLDivElement>()

  const { data, fetchNextPage, hasNextPage } = query

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage()
    }
  }, [isIntersecting])

  const defaultFallback = <Icons.loader />

  return (
    <>
      {typeof children === 'function'
        ? data?.pages?.map((result) => children(result))
        : children}

      <div
        ref={ref}
        className={cn('flex items-center justify-center w-full', className)}
      >
        {hasNextPage ? (
          fallback ? (
            fallback
          ) : (
            defaultFallback
          )
        ) : (
          <p className="text-xs text-muted-foreground">End of result</p>
        )}
      </div>
    </>
  )
}

export default InfiniteScroll
