'use client'

import Link from 'next/link'
import { Project } from '../../../types'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import AgoraGallery from './AgoraGallery'
import { FaCode, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'
import { TechStackDisplay } from './TechStackDisplay'

interface ProjectExpandedPanelProps {
  project: Project
  onClose: () => void
}

export function ProjectExpandedPanel({ project, onClose }: ProjectExpandedPanelProps) {
  const { type, title, description, images, icons, tech, projectLink, sourceCodeLink } = project

  return (
    <div
      className="
        col-span-full my-6
        bg-gradient-to-br from-sectionBg via-sectionBg to-primary/5
        dark:from-sectionBg dark:via-sectionBg dark:to-primary/10
        border border-primary/20 rounded-2xl overflow-hidden
        shadow-xl shadow-primary/5
        animate-in slide-in-from-top-4 fade-in duration-300
      "
    >
      {/* Close button - top right corner */}
      <div className="flex justify-end p-4 pb-0">
        <button
          onClick={onClose}
          className="
            w-10 h-10 flex items-center justify-center
            rounded-full bg-foreground/5 hover:bg-foreground/10
            text-foreground/60 hover:text-foreground
            transition-all duration-200 hover:scale-110 active:scale-95
          "
          aria-label="Close panel"
        >
          <FaTimes className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 pt-2">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-1">
          {images.length > 0 ? (
            <div className="rounded-xl overflow-hidden bg-black/5 dark:bg-black/20">
              <AgoraGallery images={images} alt={title} />
            </div>
          ) : (
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground">No images available</span>
            </div>
          )}
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-1 flex flex-col">
          {/* Type Badge */}
          <div className="mb-3">
            <Badge
              className={`
                px-3 py-1 text-xs font-semibold uppercase tracking-wider
                ${type === 'professional'
                  ? 'bg-primary/15 text-primary border-primary/30'
                  : 'bg-secondary/15 text-secondary border-secondary/30'
                }
              `}
              variant="outline"
            >
              {type}
            </Badge>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-base text-foreground/70 leading-relaxed mb-6 flex-grow">
            {description}
          </p>

          {/* Tech Stack */}
          {tech && tech.length > 0 && icons && icons.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">
                Tech Stack
              </h4>
              <TechStackDisplay icons={icons} tech={tech} />
            </div>
          )}

          {/* Action Buttons */}
          {(projectLink || sourceCodeLink) && (
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-foreground/10">
              {projectLink && (
                <Button
                  size="lg"
                  className="flex-1 h-12 text-base font-medium gap-2"
                  asChild
                >
                  <Link href={projectLink} target="_blank">
                    <FaExternalLinkAlt className="w-4 h-4" />
                    View Live Project
                  </Link>
                </Button>
              )}
              {sourceCodeLink && (
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 h-12 text-base font-medium gap-2 border-2"
                  asChild
                >
                  <Link href={sourceCodeLink} target="_blank">
                    <FaCode className="w-4 h-4" />
                    View Source Code
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
