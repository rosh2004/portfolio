import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface GalleryNavProps {
  canScrollPrev: boolean
  canScrollNext: boolean
  onPrev: () => void
  onNext: () => void
}

export function GalleryNav({
  canScrollPrev,
  canScrollNext,
  onPrev,
  onNext
}: GalleryNavProps) {
  return (
    <>
      <NavButton
        direction="prev"
        onClick={onPrev}
        disabled={!canScrollPrev}
      />
      <NavButton
        direction="next"
        onClick={onNext}
        disabled={!canScrollNext}
      />
    </>
  )
}

interface NavButtonProps {
  direction: 'prev' | 'next'
  onClick: () => void
  disabled: boolean
}

function NavButton({ direction, onClick, disabled }: NavButtonProps) {
  const isPrev = direction === 'prev'

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Previous image' : 'Next image'}
      className={`
        hidden md:flex absolute top-1/2 -translate-y-1/2 z-20
        ${isPrev ? 'left-4' : 'right-4'}
        w-12 h-12 items-center justify-center
        rounded-full bg-black/50 backdrop-blur-md
        text-white/90
        transition-all duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
        ${disabled
          ? 'opacity-0 pointer-events-none'
          : 'opacity-0 group-hover:opacity-100 hover:bg-black/70 hover:scale-110'
        }
      `}
    >
      {isPrev ? <FaChevronLeft className="w-4 h-4" /> : <FaChevronRight className="w-4 h-4" />}
    </button>
  )
}
