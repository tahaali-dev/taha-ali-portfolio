import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Sct from "../scrollToTop/Sct.jsx"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Sct />
    </>
  );
};

export default Layout;
