import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="width-100c back-footer">
        <div className="width-85 footer-cont">
        <div className="right-footer">
       <h5> Ⓒ Taha Ali(2023) 💥</h5>
      </div>
      <div className="nav-middle back-midd">
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

            </ul>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;
