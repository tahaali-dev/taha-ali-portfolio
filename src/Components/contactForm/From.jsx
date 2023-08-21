import React, { useState } from "react";
import "./From.css";
import { ContactFromfill } from "../../Utils/Api";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const From = () => {
  const navigate = useNavigate();
  //State manage
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, SetDesc] = useState("");
  const [question, Setquestion] = useState("");

  const { mutate, isLoading } = useMutation(ContactFromfill);

  const HandleSubmit = (e) => {
    e.preventDefault();
    mutate({ name, email, desc, question });
    toast.success("Thanks For Contacting Me ", {
      icon: "❤️",
      style: {
        borderRadius: "10px",
        background: "var(--dark2)",
        color: "#fff",
      },
    });
    navigate("/"); 
  };

  return (
    <div className="width-100c center">
      <form className="width-85 form-cont">
        <h2>Contact Form 💛</h2>
        <div className="inputs">
          <input
            type="text"
            placeholder="Enter Your Good Name 😊"
            required
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>

        <div className="inputs">
          <input
            type="email"
            placeholder="Enter Email Please 📧"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inputs">
          <textarea
            placeholder="Enter Your Message Please 💬 "
            cols="30"
            rows="10"
            required
            value={desc}
            onChange={(e) => SetDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="inputs">
          <input
            type="text"
            placeholder="Any Question For Me (Optional) 🙋"
            value={question}
            onChange={(e) => Setquestion(e.target.value)}
          />
        </div>

        <button className="white-button round" onClick={HandleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default From;
