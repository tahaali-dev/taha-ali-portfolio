import axios from "axios";
import { useNavigate } from "react-router-dom";
// ------------------Imports----------------------------
export const apiUrl = axios.create({
  baseURL: "https://pw-server-60hj.onrender.com",
});

//Contact Form
export const ContactFromfill = async ({ name, email, desc, question }) => {
  try {
    // console.log(data);
    const response = await apiUrl.post("/contact-tahaali", {
      name,
      email,
      desc,
      question,
    });

   
  } catch (error) {
    toast.error("Something Went Wrong try Again later");
    throw error;
  }
};
