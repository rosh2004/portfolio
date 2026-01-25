'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../../../types'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { FaCode, FaEye, FaExpand } from 'react-icons/fa'
import IconBar from '../timeline/IconBar'

interface ProjectCardCompactProps {
  project: Project
  isSelected: boolean
  onClick: () => void
}

export function ProjectCardCompact({ project, isSelected, onClick }: ProjectCardCompactProps) {
  const { type, title, images, icons, projectLink, sourceCodeLink } = project

  return (
    <Card
      className={`
        flex flex-col
        overflow-hidden transition-all duration-200
        hover:shadow-lg hover:-translate-y-1
        ${isSelected ? 'ring-2 ring-primary shadow-lg' : ''}
      `}
    >
      {/* Thumbnail Image */}
      {images.length > 0 && (
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Blurred background layer */}
          <div className="absolute inset-0">
            <Image
              src={images[0]}
              alt=""
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="object-cover scale-125 blur-xl brightness-75"
              aria-hidden="true"
            />
          </div>
          {/* Main image - shows full, one dimension fills completely */}
          <div className="absolute inset-0">
            <Image
              src={images[0]}
              alt={title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              className="object-contain"
            />
          </div>
          {/* Type Badge */}
          <TypeBadge type={type} />
        </div>
      )}

      <CardContent className="p-3 min-h-40 grow flex flex-col gap-2">
        {/* Title */}
        <h4 className="text-sm font-medium text-foreground truncate" title={title}>
          {title}
        </h4>

        {/* Tech Icons */}
        {icons && icons.length > 0 && (
          <div className="scale-75 origin-left">
            <IconBar icons={icons.slice(0, 5)} />
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto pt-1">
          {/* View / GitHub row */}
          {(projectLink || sourceCodeLink) && (
            <div className="flex gap-1.5 mb-2" onClick={(e) => e.stopPropagation()}>
              {projectLink && (
                <Button variant="outline" size="sm" className="h-7 text-xs flex-1" asChild>
                  <Link href={projectLink} target="_blank">
                    <FaEye className="w-3 h-3 mr-1" />
                    View
                  </Link>
                </Button>
              )}
              {sourceCodeLink && (
                <Button variant="outline" size="sm" className="h-7 text-xs flex-1" asChild>
                  <Link href={sourceCodeLink} target="_blank">
                    <FaCode className="w-3 h-3 mr-1" />
                    GitHub
                  </Link>
                </Button>
              )}
            </div>
          )}

          {/* Expand button row */}
          <Button
            variant={isSelected ? "default" : "secondary"}
            size="sm"
            className="h-7 text-xs w-full"
            onClick={onClick}
          >
            <FaExpand className="w-3 h-3 mr-1" />
            {isSelected ? 'Close' : 'Expand'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function TypeBadge({ type }: { type: 'professional' | 'personal' }) {
  const isProfessional = type === 'professional'

  return (
    <span
      className={`
        absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium uppercase tracking-wide
        ${isProfessional
          ? 'bg-primary text-white'
          : 'bg-secondary text-white'
        }
      `}
    >
      {type}
    </span>
  )
}
