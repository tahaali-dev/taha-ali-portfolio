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
      <div className="sticky">
        <div className="Nav-Cont ">
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
              <Link
                to="/"
                className="link"
                onClick={() => scrollToSection("herosection", 70)}
              >
                Main
              </Link>

              <Link
                className="link"
                onClick={() => scrollToSection("skillssection", 70)}
              >
                Skills
              </Link>

              <Link
                className="link"
                onClick={() => scrollToSection("edusection", 70)}
              >
                Qualification
              </Link>

              <Link className="link">Projects</Link>

              <Link
                className="link"
                onClick={() => scrollToSection("aboutsection")}
              >
                About Me
              </Link>
            </ul>
            <button className="blackbutton">Contact</button>
          </div>
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

        {/* Mobile Menu */}
        <div className={menu}>
          <div className="mobile-menu-cont">
            <Link
              to="/"
              className="link"
              onClick={() => scrollToSection("herosection", 70)}
            >
              <i class="fa-solid fa-house fa"></i>
            </Link>

            <Link
              className="link"
              onClick={() => scrollToSection("skillssection", 70)}
            >
              <i class="fa-solid fa-pen-clip fa"></i>
            </Link>

            <Link
              className="link"
              onClick={() => scrollToSection("edusection", 70)}
            >
              <i className="fa-solid fa-graduation-cap fa"></i>
            </Link>

            <Link className="link">
              <i className="fa-solid fa-list-check fa"></i>
            </Link>

            <Link
              className="link"
              onClick={() => scrollToSection("aboutsection")}
            >
              <i className="fa-solid fa-user fa"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
