import EducationSection from "./(sections)/EducationSection";
import HomeSection from "./(sections)/HomeSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import Section from "./(sections)/Section";
import WorkExperienceSection from "./(sections)/WorkExperienceSection";

export default function Home() {
  return (
    <main className="font-roboto text-foreground">
      <Section alt>
        <HomeSection />
      </Section>
      <Section>
        <WorkExperienceSection />
      </Section>
      <Section alt>
        <ProjectsSection />
      </Section>
      <Section>
        <EducationSection />
      </Section>
    </main>
  );
}
