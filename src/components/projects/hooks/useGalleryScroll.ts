'use client'

import { useRef, useState, useEffect, useCallback } from 'react'

interface UseGalleryScrollOptions {
  itemCount: number
  gap?: number
}

interface UseGalleryScrollReturn {
  scrollRef: React.RefObject<HTMLDivElement | null>
  activeIndex: number
  scrollToIndex: (index: number) => void
  canScrollPrev: boolean
  canScrollNext: boolean
  scrollPrev: () => void
  scrollNext: () => void
}

export function useGalleryScroll({
  itemCount,
  gap = 24
}: UseGalleryScrollOptions): UseGalleryScrollReturn {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const getItemWidth = useCallback(() => {
    return scrollRef.current?.firstElementChild?.clientWidth || 0
  }, [])

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return

    const scrollLeft = scrollRef.current.scrollLeft
    const itemWidth = getItemWidth()

    const newIndex = Math.round(scrollLeft / (itemWidth + gap))
    setActiveIndex(Math.min(Math.max(0, newIndex), itemCount - 1))
  }, [itemCount, gap, getItemWidth])

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollRef.current) return

    const itemWidth = getItemWidth()

    scrollRef.current.scrollTo({
      left: index * (itemWidth + gap),
      behavior: 'smooth'
    })
  }, [gap, getItemWidth])

  const scrollPrev = useCallback(() => {
    scrollToIndex(Math.max(0, activeIndex - 1))
  }, [activeIndex, scrollToIndex])

  const scrollNext = useCallback(() => {
    scrollToIndex(Math.min(itemCount - 1, activeIndex + 1))
  }, [activeIndex, itemCount, scrollToIndex])

  return {
    scrollRef,
    activeIndex,
    scrollToIndex,
    canScrollPrev: activeIndex > 0,
    canScrollNext: activeIndex < itemCount - 1,
    scrollPrev,
    scrollNext
  }
}
