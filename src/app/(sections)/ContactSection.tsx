import ContactForm from "@/components/ContactForm"
import SectionHeading from "@/components/ui/SectionHeading"

function ContactSection() {
  return (
    <article id="contact-me-section" className="mb-20">
      <SectionHeading>Contact Me</SectionHeading>
      <ContactForm />
    </article>
  )
}

export default ContactSection