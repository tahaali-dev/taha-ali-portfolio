import React, { useState } from "react";
import "./Protfoliogrid.css";
import { Link, useNavigate } from "react-router-dom";
import { CgMoreVerticalR } from "react-icons/cg";
import { FaGitSquare } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { data } from "../../data/data";
//Imports-----------------------------------

const PortfolioGrid = () => {
  const navigate = useNavigate();
  const intialcardload = 3;
  const itemperpage = 3;

  const [itemsToShow, setItemsToShow] = useState(intialcardload);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemperpage);
  };

  return (
    <div className="width-100c" id="portfolio">
      <div className="width-85 port-grid-cont ">
        <div className="title-cont">
          <h2>Full Stack MERN Projects 📇</h2>
          <p>Amazing Webs In This Section</p>
        </div>

        <div className="grid-card-cont ">
          {data.slice(0, itemsToShow).map((item) => (
            <div className="card relative" key={item.id}>
              <h2 className="hasttag">#{item.id}</h2>
              <img src={item.image} alt="img1" />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <div className="card-icon">
                  <Link className="link" to={item.code} target="_blank">
                    <div className="icon-set">
                      <i className="padd-r">
                        <FaGitSquare />
                      </i>
                    </div>
                  </Link>

                  <Link className="link" to={item.demo} target="_blank">
                    <div className="icon-set">
                      <button className="icon-btn">Live</button>
                    </div>
                  </Link>

                  <Link
                    to={`/port-single/${item.id}`}
                    className="link "
                    onClick={() => scrollToSection("top", 70)}
                  >
                    <div className="icon-set">
                      <button className="icon-btn">More...</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="but-cont">
          {itemsToShow < data.length && (
            <button className="blackbutton" onClick={handleLoadMore}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
