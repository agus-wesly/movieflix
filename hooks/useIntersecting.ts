import { Ref, useEffect, useState } from 'react'

export default function useIntersection<T extends HTMLElement>(): [
  boolean,
  Ref<T>
] {
  const [intersecting, setIntersecting] = useState<boolean>(false)
  const [element, setElement] = useState<HTMLElement>()
  useEffect(() => {
    if (!element) return
    const observer = new IntersectionObserver((entries) => {
      setIntersecting(entries[0]?.isIntersecting)
    })
    observer.observe(element)
    return () => observer.unobserve(element)
  }, [element])

  return [intersecting, (el) => el && setElement(el)]
}
