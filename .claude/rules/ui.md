# UI Components

## Colors (globals.css)

| Variable | Light | Dark |
|----------|-------|------|
| background | #dffcf9 | #001517 |
| primary | #0699ab | #0699ab |
| secondary | #7ed159 | #7ed159 |
| sectionBg | #effcfd | #01292c |

## Page Layout

```tsx
<Section>HomeSection</Section>
<Section alt>WorkExperienceSection</Section>
<Section alt>ProjectsSection</Section>
<Section>EducationSection</Section>
```

## Key Components

| Component | Location | Notes |
|-----------|----------|-------|
| Section | `src/app/(sections)/Section.tsx` | `alt` prop for bg color |
| Timeline | `src/components/timeline/` | Work experience display |
| Project Cards | `ProjectsSection.tsx` | Grid layout |
| Base UI | `src/components/ui/` | shadcn/ui components |
