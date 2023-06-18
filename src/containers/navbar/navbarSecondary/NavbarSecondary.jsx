import './navbarSecondary.css';

import { NavLink } from 'react-router-dom';
import { secondaryLinks } from './secondaryLinks';

const NavbarSecondary = () => {
  var linkGroup = secondaryLinks.find(obj => {
    return obj.path === window.location.pathname;
  })

  return (
  <nav className="navbar-lower">
    <div className="navbar-lower-links">

      {linkGroup.sublinks.map((nav, index) => (
        <NavLink 
          key={index} 
          to={nav.path}> 
            <p>{nav.name}</p>
        </NavLink>
      ))}

    </div>
  </nav>
  );
}

export default NavbarSecondary;
