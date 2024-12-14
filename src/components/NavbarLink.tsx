import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import React from 'react'

type Props = {
  href: Url,
  title: string
}

function NavbarLink({href, title}: Props) {
  return (
    <Link className='text-xl rounded-md px-4' href={ href }>{title}</Link>
  )
}

export default NavbarLink