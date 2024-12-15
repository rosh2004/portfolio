import React from 'react'
import { Badge } from './ui/badge'

type Props = {
  className?: string
}

function TechStacksRow({className}: Props) {

  const techStacks = [
    'React',
    'Next.js',
    'TailwindCSS',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'GraphQL',
    'Apollo Client',
    'Apollo Server',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Kubernetes',
    'AWS',
    'Google Cloud',
    'Firebase',
    'Netlify',

  ]

  return (
    <div className={`flex flex-wrap gap-2 ${className? className: ''}`}>
      {
        techStacks.map((tech) => (
          <Badge variant='outline' className='text-foreground dark:text-foreground font-normal text-md border-2 border-primary dark:border-primary' key={tech}>{tech}</Badge>
        ))
      }
    </div>
  )
}

export default TechStacksRow