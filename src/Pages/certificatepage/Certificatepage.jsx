import React from "react";
import "./cet.css";

const Certificatepage = () => {
  return (
    <div className="width-100c">
      <div className="width-85 main-cert-cont">
        <h2>My Certificates 🔍</h2>
        <div className="cert-cont">
          <div className="cer-card">
            <img src="/certificates/udemy.jpg" alt="udemy certificate" />
          </div>

          <div className="cer-card">
            <img src="/certificates/info.jpg" alt="infosys certificate" />
          </div>

          <div className="cer-card">
            <img src="/certificates/microsoft.jpg" alt="" />
          </div>

          <div className="cer-card">
            <img src="/certificates/devtown.jpg" alt="" />
          </div>

          <div className="cer-card">
            <img src="/certificates/youth.jpg" alt="" />
          </div>

          <div className="cer-card">
            <img src="/certificates/cwp.jpg" alt="" />
          </div>

          <div className="cer-card">
            <img src="/certificates/alist.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificatepage;
