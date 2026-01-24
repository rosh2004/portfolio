import React from 'react'
import { Badge } from './ui/badge'

type Props = {
  className?: string
}

function TechStacksRow({className}: Props) {

  const techStacks = [
    'Angular2+',
    'PrimeNG',
    'NgRx',
    'RxJS',
    'React',
    'Next.js',
    'ShadCN',
    'TypeScript',
    'TailwindCSS',
    'Javascript',
    'Node.js',
    'NestJS',
    'Supabase',
    'MongoDB',
    'PostgreSQL',
    'MSSQL',
    'GraphQL',
    'Docker',
    'Vercel',
    'Claude Code',
    'Cursor',
    'Kendo UI',
    'Material UI',
    'Sass',
    'JEST',
    'Jira',
    'Confluence',
    'Bitbucket',
    'Github',
    'Git',
    'REST API',
    'Agile',
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