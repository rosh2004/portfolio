'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Project } from '../../../types'
import { Button } from '../ui/button'
import { FaCode, FaEye } from 'react-icons/fa'
import { Card, CardContent } from '../ui/card'
import IconBar from '../timeline/IconBar'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, images, icons, projectLink, sourceCodeLink } = project

  return (
    <Card className="overflow-hidden">
      {/* Preview Image */}
      {images.length > 0 && (
        <div className="relative aspect-video overflow-hidden">
          <Link href={images[0]} target="_blank">
            <Image
              src={images[0]}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </Link>
        </div>
      )}

      <CardContent className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>

        {/* Description */}
        <p className="text-sm text-foreground/70 leading-relaxed">
          {description}
        </p>

        {/* Tech Icons */}
        {icons && icons.length > 0 && (
          <IconBar icons={icons} />
        )}

        {/* Action Buttons */}
        {(projectLink || sourceCodeLink) && (
          <div className="flex items-center gap-2 pt-2 flex-wrap">
            {projectLink && (
              <Button variant="outline" size="sm" asChild>
                <Link href={projectLink} target="_blank">
                  <FaEye className="w-3.5 h-3.5 mr-2" />
                  View
                </Link>
              </Button>
            )}
            {sourceCodeLink && (
              <Button variant="outline" size="sm" asChild>
                <Link href={sourceCodeLink} target="_blank">
                  <FaCode className="w-3.5 h-3.5 mr-2" />
                  GitHub
                </Link>
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
