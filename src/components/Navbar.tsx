import CallToAction from "./CallToAction"
import MainLogo from "./MainLogo"
import NavbarLink from "./NavbarLink"
import { GiHamburgerMenu } from "react-icons/gi"
import { Toggle } from "./ui/toggle"

function Navbar() {
  return (
    <header className="min-h-[65px]">
      <nav className="flex justify-between items-center py-3 mx-auto px-4">
        <Toggle className="sm:hidden mr-6 md:mr-0 text-primary hover:opacity-70 hover:bg-accent hover:text-foreground-light dark:hover:bg-accent dark:hover:text-foreground-light data-[state=on]:bg-accent dark:data-[state=on]:bg-accent data-[state=on]:text-foreground-light dark:data-[state=on]:text-foreground-light">
          <GiHamburgerMenu className="scale-150"/>
        </Toggle >
        <div className="flex items-center">
          <MainLogo className="sm:h-10 h-9" height={'100%'}/>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <NavbarLink href='/' title='Home' />
          <NavbarLink href='/blogs' title='Blogs' />
        </div>
        <CallToAction>Hire Me</CallToAction>
      </nav>
    </header>
  )
}

export default Navbar