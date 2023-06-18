import './navbar.css';

import NavbarSecondary from './navbarSecondary/NavbarSecondary'
import NavbarPrimary from './navbarPrimary/NavbarPrimary'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarPrimary />
      <NavbarSecondary />
    </nav>
  )
}

export default Navbar