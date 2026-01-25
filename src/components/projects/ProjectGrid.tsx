'use client'

import { useState, useEffect, useCallback } from 'react'
import { Project } from '../../../types'
import { ProjectCardCompact } from './ProjectCardCompact'
import { ProjectExpandedPanel } from './ProjectExpandedPanel'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [itemsPerRow, setItemsPerRow] = useState(5)

  // Update items per row based on screen size
  const updateItemsPerRow = useCallback(() => {
    const width = window.innerWidth
    if (width >= 1280) {
      setItemsPerRow(5) // xl
    } else if (width >= 768) {
      setItemsPerRow(4) // md
    } else if (width >= 640) {
      setItemsPerRow(3) // sm
    } else {
      setItemsPerRow(2) // default
    }
  }, [])

  useEffect(() => {
    updateItemsPerRow()
    window.addEventListener('resize', updateItemsPerRow)
    return () => window.removeEventListener('resize', updateItemsPerRow)
  }, [updateItemsPerRow])

  const handleCardClick = (index: number) => {
    // Toggle: if same card clicked, close it
    setSelectedIndex(selectedIndex === index ? null : index)
  }

  const handleClose = () => {
    setSelectedIndex(null)
  }

  // Calculate which row the selected item is in
  const selectedRowIndex = selectedIndex !== null
    ? Math.floor(selectedIndex / itemsPerRow)
    : null

  // Group projects into rows
  const rows: Project[][] = []
  for (let i = 0; i < projects.length; i += itemsPerRow) {
    rows.push(projects.slice(i, i + itemsPerRow))
  }

  return (
    <div className="space-y-4">
      {rows.map((rowProjects, rowIndex) => {
        // Calculate the starting index for this row
        const rowStartIndex = rowIndex * itemsPerRow

        return (
          <div key={rowIndex}>
            {/* Row of cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
              {rowProjects.map((project, colIndex) => {
                const projectIndex = rowStartIndex + colIndex
                return (
                  <ProjectCardCompact
                    key={projectIndex}
                    project={project}
                    isSelected={selectedIndex === projectIndex}
                    onClick={() => handleCardClick(projectIndex)}
                  />
                )
              })}
            </div>

            {/* Expanded panel appears after the row containing the selected card */}
            {selectedRowIndex === rowIndex && selectedIndex !== null && (
              <ProjectExpandedPanel
                project={projects[selectedIndex]}
                onClose={handleClose}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
