import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      {/* IconContext changes icons from default black to white, as background is black */}
      <IconContext.Provider value={{ color: "#EFD231" }}>
        <nav className="navbar">
          <div className="navbar-container">
            {/* Logo routes to home and closes mobile menu when clicked */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src="/25Logo.webp" className="navbar-icon" />
            </Link>
            {/* Switches burger between bars when inactive and cross when active */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? (
                <FaTimes style={{ color: "#ff9200" }} />
              ) : (
                <FaBars style={{ color: "#ff9200" }} />
              )}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/survey"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Quiz
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/atozlist"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  A-Z Glossary
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Resources
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
