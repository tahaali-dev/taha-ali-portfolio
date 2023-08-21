import React from "react";
import TechSec from "../../Components/TechSect/TechSec";
import Tech2 from "../../Components/TechSect/Tech2";
import OtherTechs from "../../Components/TechSect/otherTechs";

const Skills = () => {
  return (
    <div className="width-100c" id="top">
      <div className="width-80">
        <TechSec />
        <Tech2 />
        <OtherTechs />
      </div>
    </div>
  );
};

export default Skills;
