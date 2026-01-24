interface GalleryDotsProps {
  total: number
  activeIndex: number
  onDotClick: (index: number) => void
}

export function GalleryDots({ total, activeIndex, onDotClick }: GalleryDotsProps) {
  if (total <= 1) return null

  return (
    <div className="flex justify-center items-center gap-2.5 mt-4 py-2" role="tablist">
      {Array.from({ length: total }, (_, index) => (
        <DotButton
          key={index}
          index={index}
          isActive={index === activeIndex}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  )
}

interface DotButtonProps {
  index: number
  isActive: boolean
  onClick: () => void
}

function DotButton({ index, isActive, onClick }: DotButtonProps) {
  return (
    <button
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-label={`Go to image ${index + 1}`}
      className={`
        relative rounded-full transition-all duration-300 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isActive
          ? 'w-8 h-2.5 bg-primary'
          : 'w-2.5 h-2.5 bg-foreground/40 hover:bg-foreground/60 dark:bg-white/40 dark:hover:bg-white/60'
        }
      `}
    >
      {isActive && (
        <span
          className="absolute inset-0 rounded-full bg-primary/50 blur-sm"
          aria-hidden="true"
        />
      )}
    </button>
  )
}
