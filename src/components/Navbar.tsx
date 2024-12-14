import CallToAction from "./CallToAction"
import MainLogo from "./MainLogo"
import NavbarLink from "./NavbarLink"
import { GiHamburgerMenu } from "react-icons/gi"
import { Toggle } from "./ui/toggle"

function Navbar() {
  return (
    <header className="bg-foreground min-h-[65px]">
      <nav className="flex justify-between items-center py-3 mx-auto px-4">
        <Toggle  className="sm:hidden mr-[60px]">
          <GiHamburgerMenu  />
        </Toggle >
        <div className="flex items-center">
          <MainLogo className="sm:h-10 h-9" height={'100%'}/>
        </div>
        <div className="hidden sm:flex justify-center items-center">
          <NavbarLink href='/' title='Home' />
          <NavbarLink href='/about' title='About' />
        </div>
        <CallToAction text='Contact Me' />
      </nav>
    </header>
  )
}

export default Navbar