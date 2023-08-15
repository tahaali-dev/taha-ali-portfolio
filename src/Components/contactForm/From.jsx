import React from "react";
import "./From.css";

const From = () => {
  return (
    <div className="width-100c center">
      
      <form className="width-85 form-cont">
      <h2>Contact Form 💛</h2>
        <div className="inputs">
          <input type="text" placeholder="Enter Your Good Name 😊" required />
        </div>

        <div className="inputs">
          <input type="email" placeholder="Enter Email Please 📧" required />
        </div>

        <div className="inputs">
          <textarea
            placeholder="Enter Your Message Please 💬 "
            cols="30"
            rows="10"
            required
          ></textarea>
        </div>

        <div className="inputs">
          <input type="text" placeholder="Any Question For Me (Optional) 🙋"  />
        </div>

        <button className="white-button round">Submit</button>
      </form>
    </div>
  );
};

export default From;
