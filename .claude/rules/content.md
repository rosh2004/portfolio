# Content Structure

## Projects (`src/app/lib/project-data.ts`)

```typescript
{
  type: "professional" | "personal",
  title: string,
  description: string,
  images: string[],           // External URLs (utfs.io)
  icons?: IconType[],         // React Icons for tech stack
  projectLink?: string,       // Live demo URL
  sourceCodeLink?: string,    // GitHub URL
}
```

## Work Experience (`src/app/lib/work-experience.ts`)

```typescript
{
  from: string,              // "Jan 2025"
  to: string,                // "Present" or "Dec 2024"
  company: {
    name: string,
    url?: string,            // Optional for contract work
    linkedin?: string,       // Optional for contract work
  },
  title: string,
  description: string,
  teams: [{
    title: string,
    description: string,
    icons: IconType[],
  }],
}
```

## Tech Stack (`src/components/TechStacksRow.tsx`)

Array of strings rendered as Badge components.

## Bio (`src/app/(sections)/HomeSection.tsx`)

Hardcoded JSX with name, title, bio, TechStacksRow, and profile image.

## Images

- Local: `/public/images/`
- External: utfs.io (project screenshots)
