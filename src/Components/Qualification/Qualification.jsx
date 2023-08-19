import "./quali.css";
import { Link } from "react-router-dom";

const Qualification = () => {
  return (
    <div className="width-100c" id="edusection">
      <div className="width-85 edu-cont1 ">
        <h2>Qualification 🎓</h2>
        <div className="width-85 edu-cont2">
          <div className="edu-content ">
            <h3>School</h3>
            <p>10th-12th from Mp-Board </p>
            <p>Badri H.S.S (Indore)</p>
          </div>
          <span className="line"></span>
          <div className="edu-content">
            <h3>College</h3>
            <p>B.C.A (2nd Year Dropout) </p>
            <p>M.I.S.T (Indore)</p>
          </div>
          <span className="line"></span>
          <div className="edu-content">
            <h3>FrontEnd</h3>
            <p>Udemy(Dr.Angela) &other Resources</p>
            <p>By Own In 3Months</p>
          </div>
          <span className="line"></span>
        <div className="edu-content">
          <h3>BackEnd</h3>
          <p>Udemy,Infosys (springboard)</p>
          <p>By Own In 4Months</p>
        </div>
        <span className="line"></span>
          <Link className="link" to="/qualificationmine">
            <div className="edu-content round-edu">
              <p>More About My Journey</p>
            </div>
          </Link>
          {/* <span className="line"></span> */}
        </div>
      </div>
    </div>
  );
};

export default Qualification;
