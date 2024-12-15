type Props = {
  children: React.ReactNode,
  alt?: boolean
}

function Section({children, alt}: Props) {
  const sectionColor = alt ? ' ' : 'bg-sectionBg dark:bg-sectionBg'
  return (
    <section className={`${sectionColor}`}>
      <div className="container mx-auto p-8 md:p-16 lg:p-28 ">
        {children}
      </div>
    </section>
  )
}

export default Section