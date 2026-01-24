interface GalleryDotsProps {
  total: number
  activeIndex: number
  onDotClick: (index: number) => void
}

export function GalleryDots({ total, activeIndex, onDotClick }: GalleryDotsProps) {
  return (
    <div className="flex justify-center items-center gap-2 mt-4" role="tablist">
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
        relative h-2 rounded-full transition-all duration-300 ease-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
        ${isActive
          ? 'w-8 bg-primary'
          : 'w-2 bg-primary/30 hover:bg-primary/50'
        }
      `}
    >
      {isActive && (
        <span
          className="absolute inset-0 rounded-full bg-primary/50 blur-sm animate-pulse"
          aria-hidden="true"
        />
      )}
    </button>
  )
}
