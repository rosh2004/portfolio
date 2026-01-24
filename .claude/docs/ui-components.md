# UI Components Reference

## Color Palette (globals.css)

**Light Mode:**
- `--background`: #dffcf9 (light cyan)
- `--primary`: #0699ab (teal)
- `--secondary`: #7ed159 (green)
- `--sectionBg`: #effcfd (very light cyan)

**Dark Mode:**
- `--background`: #001517 (very dark)
- `--sectionBg`: #01292c (dark teal)

## Page Layout (`src/app/page.tsx`)

```tsx
<Section>
  <HomeSection />
</Section>
<Section alt>
  <WorkExperienceSection />
</Section>
<Section alt>
  <ProjectsSection />
</Section>
<Section>
  <EducationSection />
</Section>
```

## Key Components

**Section** (`src/app/(sections)/Section.tsx`):
- Container with padding
- `alt` prop adds background color

**Project Cards** (`ProjectsSection.tsx`):
- Professional: 2-col grid with internal image carousel
- Personal: Carousel (to be replaced with grid)

**Timeline** (`src/components/timeline/`):
- `Timeline.tsx` - Container
- `TimelineItem.tsx` - Job entry
- `TimeSubStepComponent.tsx` - Sub-projects
- `IconBar.tsx` - Tech icons

**Base UI** (`src/components/ui/`):
- shadcn/ui components (card, carousel, badge, button)
