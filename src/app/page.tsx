import HomeSection from "./(sections)/HomeSection";
import Section from "./(sections)/Section";

export default function Home() {
  return (
    <main>
      <Section alt>
        <HomeSection />
      </Section>
      <Section>
        <HomeSection />
      </Section>
    </main>
  );
}
