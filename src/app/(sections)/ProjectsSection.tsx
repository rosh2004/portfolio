'use client'

import SectionHeading from "@/components/ui/SectionHeading"
import { ProjectList } from "../lib/project-data"
import { ProjectGrid } from "@/components/projects/ProjectGrid"

function ProjectsSection() {
  // Sort: professional first, then personal
  const sortedProjects = [...ProjectList].sort((a, b) => {
    if (a.type === 'professional' && b.type === 'personal') return -1
    if (a.type === 'personal' && b.type === 'professional') return 1
    return 0
  })

  return (
    <article>
      <SectionHeading>Projects</SectionHeading>
      <ProjectGrid projects={sortedProjects} />
    </article>
  )
}

export default ProjectsSection
