import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("mobile-close");

  // Menu Handle
  const Menuopen = () => {
    if (menu === "mobile-close") {
      setMenu("mobile-menu");
    } else if (menu === "mobile-menu") {
      setMenu("mobile-close");
    }
  };

  return (
    <>
      <div className="Nav-Cont">
        <div className="nav-left">
          <h5>
            <Link to="/" className="link">
              Taha
            </Link>
          </h5>
        </div>

        <div className="nav-middle">
          <ul>
            <li>
              <i className="fa-brands fa-square-github"></i>
            </li>
            <li>
              <i className="fa-brands fa-linkedin"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-square-twitter"></i>
            </li>
          </ul>
        </div>

        <div className="nav-right">
          <ul>
            <Link className="link"> Skills</Link>
            <Link className="link">Education</Link>
            <Link className="link">Projects</Link>
            <Link to="/about" className="link">
              About Me
            </Link>
          </ul>
          <button className="blackbutton">Contact</button>
        </div>
      </div>

      <div className="Nav-mobile">
        <div className="inner">
          <div className="mobile-left">
            <h5>Taha</h5>
          </div>

          <div className="mobile-middle">
            <ul>
              <li>
                <i className="fa-brands fa-square-github"></i>
              </li>
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-square-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-square-twitter"></i>
              </li>
            </ul>
          </div>

          <p className="menu-button" onClick={() => Menuopen()}>
            <i className="fa-solid fa-bars"></i>
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={menu}>
        <div className="mobile-menu-cont">
          <i className="fa-regular fa-star"></i>
          <i className="fa-solid fa-graduation-cap"></i>
          <i className="fa-solid fa-list-check"></i>
          <i className="fa-solid fa-user"></i>
          <i className="fa-solid fa-plus"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
