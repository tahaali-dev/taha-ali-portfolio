import React from "react";
import "./Sct.css";

const Sct = () => {
  return (
    <div className="sct-cont" onClick={() => scrollToSection("top", 70)}>
      <i className="fa-solid fa-angles-up"></i>
    </div>
  );
};

export default Sct;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
