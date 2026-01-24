'use client'

import SectionHeading from "@/components/ui/SectionHeading"
import { ProjectList } from "../lib/project-data"
import { ProjectCard } from "@/components/projects"

function ProjectsSection() {
  const professionalProjects = ProjectList.filter(p => p.type === 'professional')
  const personalProjects = ProjectList.filter(p => p.type === 'personal')

  return (
    <article>
      <SectionHeading>Projects</SectionHeading>

      {/* Professional Projects */}
      {professionalProjects.length > 0 && (
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-medium mb-6">Professional</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <div>
          <h3 className="text-2xl md:text-3xl font-medium mb-6">Personal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

export default ProjectsSection
