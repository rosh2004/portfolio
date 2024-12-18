"use client"

import { Url } from 'next/dist/shared/lib/router/router'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  href: Url,
  title: string
}

function NavbarLink({href, title}: Props) {
  const pathname = usePathname()
  return (
    <div className={`text-xl rounded-md px-4 ${href === pathname ? 'opacity-50 hover:cursor-default' : ''}`}>{title}</div>
  )
}

export default NavbarLink