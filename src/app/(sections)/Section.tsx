type Props = {
  children: React.ReactNode,
  alt?: boolean
}

function Section({children, alt}: Props) {
  const sectionColor = alt ? ' ' : 'bg-sectionBg dark:bg-sectionBg'
  return (
    <section className={`${sectionColor}`}>
      <div className="container mx-auto px-10 py-10 md:px-10">
        {children}
      </div>
    </section>
  )
}

export default Section