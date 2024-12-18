import CallToAction from "./CallToAction"
import MainLogo from "./MainLogo"
import NavbarLink from "./NavbarLink"
import Link from "next/link"

function Navbar() {

  const links = [
    { href: '/', title: 'Home' },
    // { href: '/blogs', title: 'Blogs' },
  ];
  const renderedLinks = links.map((link, index) => {
    return (
      <Link key={index} href={link.href}>
        <NavbarLink  href={link.href} title={link.title} />
      </Link>
    )
  });

  return (
    <header className="min-h-[65px] bg-white/95 dark:bg-black/95 fixed w-full z-10">
      <nav className="flex justify-between items-center py-3 mx-auto px-4">
        {/* <Toggle className="sm:hidden mr-6 md:mr-0 text-primary hover:opacity-70 hover:bg-accent hover:text-foreground-light dark:hover:bg-accent dark:hover:text-foreground-light data-[state=on]:bg-accent dark:data-[state=on]:bg-accent data-[state=on]:text-foreground-light dark:data-[state=on]:text-foreground-light">
          <GiHamburgerMenu className="scale-150"/>
        </Toggle > */}
        <Link href='/' className="flex items-center">
          <MainLogo className="sm:h-10 h-9" height={'100%'}/>
        </Link>
        <div className="hidden sm:flex justify-center items-center">
          {renderedLinks}
        </div>
        <CallToAction>Hire Me</CallToAction>
      </nav>
    </header>
  )
}

export default Navbar