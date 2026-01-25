import Image from 'next/image'

interface GalleryImageProps {
  src: string
  alt: string
  index: number
  total: number
  priority?: boolean
}

export function GalleryImage({
  src,
  alt,
  index,
  total,
  priority = false
}: GalleryImageProps) {
  return (
    <div
      className="relative flex-shrink-0 w-full [scroll-snap-align:center] group/image"
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl
          ring-1 ring-primary/10 dark:ring-white/10
          shadow-lg shadow-black/5 dark:shadow-black/30
          transition-all duration-500 ease-out
          group-hover/image:shadow-2xl group-hover/image:shadow-primary/10
          group-hover/image:ring-primary/30 dark:group-hover/image:ring-primary/40"
      >
        {/* Blurred background layer - fills empty space for different aspect ratios */}
        <div className="absolute inset-0">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover scale-125 blur-2xl brightness-75"
            sizes="min(80vw, 800px)"
            aria-hidden="true"
          />
        </div>

        {/* Main image - shows full, one dimension fills completely */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain transition-transform duration-700 ease-out
              group-hover/image:scale-[1.02]"
            sizes="min(80vw, 800px)"
            priority={priority}
          />
        </div>

        {/* Subtle vignette overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5
            pointer-events-none"
        />
      </div>
    </div>
  )
}
