'use client'

import Link from 'next/link'
import { Project } from '../../../types'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import AgoraGallery from './AgoraGallery'
import { FaCode, FaEye, FaTimes } from 'react-icons/fa'

interface ProjectExpandedPanelProps {
  project: Project
  onClose: () => void
}

export function ProjectExpandedPanel({ project, onClose }: ProjectExpandedPanelProps) {
  const { title, description, images, icons, projectLink, sourceCodeLink } = project

  return (
    <div
      className="
        col-span-full my-4 bg-sectionBg dark:bg-sectionBg
        border border-primary/20 rounded-xl overflow-hidden
        animate-in slide-in-from-top-4 fade-in duration-300
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 p-6">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-3">
          {images.length > 0 ? (
            <AgoraGallery images={images} alt={title} />
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground">No images</span>
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 flex flex-col">
          {/* Header with close button */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 shrink-0"
              onClick={onClose}
            >
              <FaTimes className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* Description */}
          <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-grow">
            {description}
          </p>

          {/* Tech Stack Badges */}
          {icons && icons.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {icons.map((Icon, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="flex items-center gap-1.5 border-primary/50 text-foreground/80"
                >
                  <Icon className="w-3.5 h-3.5" />
                </Badge>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          {(projectLink || sourceCodeLink) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {projectLink && (
                <Button variant="default" size="sm" asChild>
                  <Link href={projectLink} target="_blank">
                    <FaEye className="w-4 h-4 mr-2" />
                    View Live
                  </Link>
                </Button>
              )}
              {sourceCodeLink && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={sourceCodeLink} target="_blank">
                    <FaCode className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
