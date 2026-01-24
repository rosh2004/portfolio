# Portfolio Project

Next.js 15 portfolio site on Vercel.

## Commands

```bash
npm run dev      # Dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Content Files

| Content | File |
|---------|------|
| Projects | `src/app/lib/project-data.ts` |
| Work Experience | `src/app/lib/work-experience.ts` |
| Tech Stack | `src/components/TechStacksRow.tsx` |
| Bio/Home | `src/app/(sections)/HomeSection.tsx` |

## Code Style

- Tailwind CSS only (no CSS modules)
- shadcn/ui components in `src/components/ui/`
- React Icons for icons - never create custom SVG icons
- Images hosted on utfs.io
- Separate logic into custom hooks, keep components presentational
- Use barrel exports (`index.ts`) for component directories

## Key Paths

- `src/app/lib/` - Data constants
- `src/app/(sections)/` - Page sections
- `src/components/` - Custom components
- `types.d.ts` - Type definitions

## Environment

Social links in `.env`: `LINKEDIN_HREF`, `GITHUB_HREF`, `EMAIL_HREF`, `PHONE_HREF`

Contact form: `RESEND_API_KEY`

## Rules

See `.claude/rules/` for detailed docs on content structure and UI components.
