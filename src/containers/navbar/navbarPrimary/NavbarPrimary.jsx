import { NavLink } from 'react-router-dom'

import './navbarPrimary.css';

const Navbar = () => (
  <div className="navbar-upper-container">
    <div className="navbar-upper">
      <ul className="navbar-upper-links">
        <li><p><NavLink to="/">HEM</NavLink></p></li>
        <li><p><NavLink to="/butik">BUTIK</NavLink></p></li>
        <li><p><NavLink to="/klinik">KLINIK</NavLink></p></li>
        <li><p><NavLink to="/vandrarhem">VANDRARHEM</NavLink></p></li>
        <li><p><NavLink to="/about">ABOUT</NavLink></p></li>
        <li><p><a href="#footer">KONTAKT</a></p></li>
      </ul>
    </div>
  </div>
);

export default Navbar;
