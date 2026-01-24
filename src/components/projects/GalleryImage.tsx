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
      className="relative flex-shrink-0 [scroll-snap-align:center] group/image"
      style={{ width: 'min(80vw, 800px)' }}
    >
      <div
        className="relative aspect-[16/10] overflow-hidden rounded-2xl
          bg-gradient-to-br from-primary/5 to-secondary/5
          ring-1 ring-primary/10 dark:ring-white/10
          shadow-lg shadow-black/5 dark:shadow-black/30
          transition-all duration-500 ease-out
          group-hover/image:shadow-2xl group-hover/image:shadow-primary/10
          group-hover/image:ring-primary/30 dark:group-hover/image:ring-primary/40
          group-hover/image:scale-[1.01]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out
            group-hover/image:scale-105"
          sizes="min(80vw, 800px)"
          priority={priority}
        />

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10
            opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"
        />

        {/* Image counter */}
        <ImageCounter current={index + 1} total={total} />
      </div>
    </div>
  )
}

function ImageCounter({ current, total }: { current: number; total: number }) {
  return (
    <div
      className="absolute bottom-4 right-4
        px-3 py-1.5 rounded-full
        bg-black/60 backdrop-blur-md
        text-white/90 text-sm font-medium tracking-wide
        opacity-0 group-hover/image:opacity-100
        translate-y-2 group-hover/image:translate-y-0
        transition-all duration-300"
    >
      {current} / {total}
    </div>
  )
}
