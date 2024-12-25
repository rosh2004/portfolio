import ContactSection from "./(sections)/ContactSection";
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
      <Section alt>
        <ContactSection />
      </Section>
    </main>
  );
}
