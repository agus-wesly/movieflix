'use client'

import { Skeleton } from '@/components/ui/skeleton'

function Loading() {
  return (
    <>
    <div className="w-full relative h-[50vh] mb-5">
      <Skeleton className='absolute inset-0'/>
      </div>

    <div className="container gap-4 grid grid-cols-3 border-t py-4 justify-items-center md:justify-items-start md:grid-cols-6 min-h-screen">
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
      <Skeleton className="w-full" />
    </div>
    </>
  )
}

export default Loading
