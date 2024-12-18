import React from 'react'

type Props = {
  children: React.ReactNode
}

function SectionHeading({
  children
}: Props) {
  return (
    <h2 className="md:text-6xl text-4xl font-medium mb-12">{children}</h2>
  )
}

export default SectionHeading