# Portfolio Project

Next.js 15 personal portfolio site deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint
```

## Content Data Files

Update these files for content changes:

| Content | File |
|---------|------|
| Projects | `src/app/lib/project-data.ts` |
| Work Experience | `src/app/lib/work-experience.ts` |
| Tech Stack | `src/components/TechStacksRow.tsx` |
| Bio/Home | `src/app/(sections)/HomeSection.tsx` |

## Code Style

- Tailwind CSS for styling (no CSS modules)
- shadcn/ui components in `src/components/ui/`
- React Icons for icon components
- External image hosting on utfs.io for project screenshots

## Project Structure

```
src/app/lib/           # Data constants (projects, work experience)
src/app/(sections)/    # Page sections (Home, Projects, Work, Education)
src/components/ui/     # shadcn/ui base components
src/components/        # Custom components
public/images/         # Local images
public/pdfs/           # Resume PDF
```

## Environment Variables

Social links configured in `.env`:
- `LINKEDIN_HREF`, `GITHUB_HREF`, `EMAIL_HREF`, `PHONE_HREF`

Contact form uses Resend API with `RESEND_API_KEY`.

## Types

Type definitions in `/types.d.ts` for `Project`, `TimelineStep`, `TimeSubStep`.
