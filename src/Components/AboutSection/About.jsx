import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main-about" id="about">
      <div className="about-cont">
        <h2>About Myself🧑</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          mollitia ab, dolor provident numquam doloribus sunt optio, veniam non
          nostrum ea, in consectetur eaque obcaecati. Optio debitis, illo culpa
          voluptas aspernatur ad dignissimos quae, assumenda veritatis maxime,
          voluptates ipsum necessitatibus. Libero, saepe ratione id facilis
          eaque dolor necessitatibus molestiae. Provident? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repudiandae exercitationem quis
          laborum odio magni. Saepe, ullam assumenda. Iusto, assumenda! Adipisci
          iusto optio quaerat enim, molestiae{" "}
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="blackbutton">
            More About Me
          </Link>
          <Link className="white-button">Any Question</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
