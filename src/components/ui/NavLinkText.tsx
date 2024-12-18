"use client"

import { usePathname } from "next/navigation"

function NavLinkText({children}: {children: React.ReactNode}) {
  "use client"
  const pathname = usePathname()
  return (
    <div>
      {children}
    </div>
  )
}