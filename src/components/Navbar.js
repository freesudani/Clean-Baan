import React, { useState } from "react";
import Button from "./Button";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import DropdownTwo from "./DropdownTwo";
import DropdownThree from "./DropdownThree";
import { Link } from "react-router-dom";
import LogoImage from "../images/b5a114ef30884166a3739f721b742141.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);
  const [dropdownThree, setDropdownThree] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseEnterTwo = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(true);
    }
  };

  const onMouseEnterThree = () => {
    if (window.innerWidth < 960) {
      setDropdownThree(false);
    } else {
      setDropdownThree(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseLeaveTwo = () => {
    if (window.innerWidth < 960) {
      setDropdownTwo(false);
    } else {
      setDropdownTwo(false);
    }
  };

  const onMouseLeaveThree = () => {
    if (window.innerWidth < 960) {
      setDropdownThree(false);
    } else {
      setDropdownThree(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={LogoImage} alt="Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterTwo}
            onMouseLeave={onMouseLeaveTwo}
          >
            <Link to="/special" className="nav-links" onClick={closeMobileMenu}>
              Special <i className="fas fa-caret-down" />
            </Link>
            {dropdownTwo && <DropdownTwo />}
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnterThree}
            onMouseLeave={onMouseLeaveThree}
          >
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products <i className="fas fa-caret-down" />
            </Link>
            {dropdownThree && <DropdownThree />}
          </li>
          <li className="nav-item">
            <Link
              to="/book"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Book a Service
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
