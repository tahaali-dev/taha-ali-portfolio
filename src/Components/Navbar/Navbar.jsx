import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./Navbar.css";
import HomePage from "../../Pages/HomePage/HomePage";
import { color } from "framer-motion";

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
                <Link to="https://github.com/devtahajs" target="_blank">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#232020" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/taha-ali-abb46b289"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ color: "blue" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/taha_ali.in/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ff006c" }}
                  ></i>
                </Link>
              </li>

              {/* <li>
                <Link to="" target="_blank">
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "blue" }}
                  ></i>
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="nav-right">
            <ul>
              <Link
                to="/"
                className="link"
                onClick={() => scrollToSection("top", 70)}
              >
                Main
              </Link>

              <Link to="/about" className="link">
                About Me
              </Link>

              <Link to="/qualificationmine" className="link">
                Qualification
              </Link>

              <Link to="/taha-projects" className="link">
                Projects
              </Link>

              <Link to="/taha-skills" className="link">
                Skills
              </Link>
            </ul>
            <Link to="/contact-taha" className="blackbutton">
              Contact
            </Link>
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
                <Link to="https://github.com/devtahajs" target="_blank">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "#232020" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/taha-ali-abb46b289"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ color: "blue" }}
                  ></i>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.instagram.com/taha_ali.in/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                  target="_blank"
                >
                  <i
                    className="fa-brands fa-instagram"
                    style={{ color: "#ff006c" }}
                  ></i>
                </Link>
              </li>
              {/* <li>
                <Link to="" target="_blank">
                  <i
                    className="fa-brands fa-twitter"
                    style={{ color: "blue" }}
                  ></i>
                </Link>
              </li> */}
            </ul>
          </div>

          <p className="menu-button " onClick={() => Menuopen()}>
            <i className="fa-solid fa-bars"></i>
          </p>
        </div>

        {/* Mobile Menu */}
        <div className={menu}>
          <div className="mobile-menu-cont">
            <Link
              to="/"
              className="link"
              onClick={() => scrollToSection("top", 70)}
            >
              <i className="fa-solid fa-house fa"></i>
            </Link>

            <Link className="link" to="/taha-skills">
              <i className="fa-solid fa-pen-clip fa"></i>
            </Link>

            <Link className="link" to="/qualificationmine">
              <i className="fa-solid fa-graduation-cap fa"></i>
            </Link>

            <Link className="link" to="/taha-projects">
              <i className="fa-solid fa-list-check fa"></i>
            </Link>

            <Link to="/about" className="link">
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
