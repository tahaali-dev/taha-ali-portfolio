import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="width-100c" id="aboutsection">
      <div className="width-85 about-cont ">
        <h2>Taha's Bio 🧑</h2>
        <p>
          Hello, I'm Taha Ali. I love making websites from start to finish,
          both the front part that everyone sees and the hidden stuff in the
          back. I've learned all these cool things about web stuff all on my
          own, and I really understand how they work. I'm super curious and
          excited to try out new things, new ways to make websites even better.
          Let's go on this web adventure together, discovering new things and
          creating awesome digital stuff! If you want to know more about me,
          just Click down. 👇
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="blackbutton">
            More About Me
          </Link>
          <Link className="white-button" to="/contact-taha">
            Any Question
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
