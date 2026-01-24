'use client'

import { useGalleryScroll } from './hooks/useGalleryScroll'
import { GalleryImage } from './GalleryImage'
import { GalleryDots } from './GalleryDots'
import { GalleryNav } from './GalleryNav'

interface AgoraGalleryProps {
  images: string[]
  alt?: string
}

export default function AgoraGallery({ images, alt = 'Project image' }: AgoraGalleryProps) {
  const {
    scrollRef,
    activeIndex,
    scrollToIndex,
    canScrollPrev,
    canScrollNext,
    scrollPrev,
    scrollNext
  } = useGalleryScroll({ itemCount: images.length })

  if (!images.length) return null

  return (
    <div className="relative group">
      {/* Gradient fade edges */}
      <GalleryEdgeFades />

      {/* Scrollable gallery container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 pt-2 px-1
          [scroll-snap-type:x_mandatory]
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          cursor-grab active:cursor-grabbing"
      >
        {images.map((src, index) => (
          <GalleryImage
            key={index}
            src={src}
            alt={`${alt} ${index + 1}`}
            index={index}
            total={images.length}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <GalleryDots
        total={images.length}
        activeIndex={activeIndex}
        onDotClick={scrollToIndex}
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <GalleryNav
          canScrollPrev={canScrollPrev}
          canScrollNext={canScrollNext}
          onPrev={scrollPrev}
          onNext={scrollNext}
        />
      )}
    </div>
  )
}

function GalleryEdgeFades() {
  return (
    <>
      <div
        className="absolute left-0 top-0 bottom-0 w-12
          bg-gradient-to-r from-background via-background/80 to-transparent
          z-10 pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-12
          bg-gradient-to-l from-background via-background/80 to-transparent
          z-10 pointer-events-none
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        aria-hidden="true"
      />
    </>
  )
}
