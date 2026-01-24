import { Badge } from './ui/badge'

type Props = {
  className?: string
}

const TECH_CATEGORIES = {
  "Frontend": [
    "Angular", "React", "Next.js", "TypeScript", "Javascript",
    "TailwindCSS", "PrimeNG", "Material UI", "Kendo UI", "ShadCN", "Sass",
    "NgRx", "RxJS", "Redux", "React Query"
  ],
  "Backend": [
    "Node.js", "NestJS", "REST API", "GraphQL",
    "Supabase", "MongoDB", "PostgreSQL", "MSSQL"
  ],
  "DevOps & Tools": [
    "Docker", "Vercel", "Git", "Github", "Bitbucket",
    "Jira", "Confluence", "JEST", "Agile",
    "Claude Code", "Cursor",
  ]
} as const

function TechStacksRow({ className }: Props) {
  return (
    <div className={`flex flex-col gap-5 ${className ?? ''}`}>
      {Object.entries(TECH_CATEGORIES).map(([category, techs]) => (
        <TechCategory key={category} title={category} techs={techs} />
      ))}
    </div>
  )
}

interface TechCategoryProps {
  title: string
  techs: readonly string[]
}

function TechCategory({ title, techs }: TechCategoryProps) {
  return (
    <div>
      <h3 className="text-md uppercase tracking-wider text-foreground/60 mb-2 font-medium">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-foreground dark:text-foreground font-normal text-sm border border-primary dark:border-primary"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default TechStacksRow
