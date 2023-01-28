import React, { useState, useEffect } from "react";
import './NavBar.scss'
import { DiJqueryLogo } from "react-icons/di";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function NavBar() {
    const [click, setClicked] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
      setClicked(!click);
    };

    const handleCloseMobileMenu = () => {
      setShowNav(false);
    };

    useEffect(() => {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShowNav(true);
        } else {
          setShowNav(false);
        }
      });
    }, []);
  return (
 <div>
   <nav className={showNav ? "navbar-container" : "navbar-container active"}>
      <a href="/" className="navbar-logo">
        <DiJqueryLogo />
        <p>React Navbar</p>
      </a>
      <div className="menu-icon" onClick={handleClick}>
        {click ? <GrClose /> : <FiMenu />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/products" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-link-items" onClick={handleCloseMobileMenu}>
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default NavBar;