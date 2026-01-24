# Content Structure Reference

Detailed documentation of how content is organized in the portfolio.

## Projects (`src/app/lib/project-data.ts`)

```typescript
export const ProjectList: Project[] = [
  {
    type: "professional" | "personal",
    title: string,
    description: string,
    images: string[],           // External URLs (utfs.io)
    icons?: IconType[],         // React Icons for tech stack
    projectLink?: string,       // Live demo URL
    sourceCodeLink?: string,    // GitHub URL
  }
]
```

## Work Experience (`src/app/lib/work-experience.ts`)

```typescript
export const WORK_EXPERIENCE_LIST: TimelineSteps = [
  {
    from: string,              // Start year
    to: string,                // End year or "Present"
    company: {
      name: string,
      url: string,
      linkedin: string,
    },
    title: string,             // Job title
    description: string,       // Role summary
    teams: TimeSubStep[],      // Sub-projects/teams
  }
]

// Team sub-step:
{
  title: string,
  description: string,
  icons: IconType[],
}
```

## Tech Stack (`src/components/TechStacksRow.tsx`)

Local array of strings rendered as Badge components:
```typescript
const techStacks = ['Next.js', 'React', 'Angular2+', ...]
```

## Bio/Home (`src/app/(sections)/HomeSection.tsx`)

Hardcoded JSX with:
- Name and title
- Bio paragraph
- TechStacksRow component
- Profile image

## Images

- Local: `/public/images/` (profile photo, logos)
- External: utfs.io / 2ddyvmtgjt.ufs.sh (project screenshots)
