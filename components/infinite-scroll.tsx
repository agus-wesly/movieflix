'use client'

import useIntersection from '@/hooks/useIntersecting'
import { useEffect } from 'react'
import type { UseInfiniteQueryResult } from '@tanstack/react-query'

type Props<T> = {
  query: UseInfiniteQueryResult<T, unknown>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

function InfiniteScroll<T>({ query, children }: Props<T>) {
  const [isIntersecting, ref] = useIntersection<HTMLDivElement>()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = query

  useEffect(() => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage()
    }
  }, [isIntersecting])

  return (
    <>
      {typeof children === 'function'
        ? data?.pages?.map((result) => children(result))
        : children}

      <div ref={ref}>
        {isFetchingNextPage && hasNextPage ? 'Loading...' : ''}
      </div>
    </>
  )
}

export default InfiniteScroll
