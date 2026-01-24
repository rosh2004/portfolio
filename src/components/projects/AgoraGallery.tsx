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

      {/* Always visible image counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-sm font-medium tabular-nums">
            {activeIndex + 1} / {images.length}
          </span>
        </div>
      )}

      {/* Dot indicators - always visible */}
      {images.length > 1 && (
        <GalleryDots
          total={images.length}
          activeIndex={activeIndex}
          onDotClick={scrollToIndex}
        />
      )}

      {/* Navigation arrows - always visible when multiple images */}
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
