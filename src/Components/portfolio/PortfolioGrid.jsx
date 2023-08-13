import React, { useState } from "react";
import "./Protfoliogrid.css";
import { data } from "../../data/data";

const PortfolioGrid = () => {
  const intialcardload = 2;
  const itemperpage = 2;

  const [itemsToShow, setItemsToShow] = useState(intialcardload);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemperpage);
  };

  return (
    <div className="width-100c" id="portfolio">
      <div className="width-85 port-grid-cont ">
        <div className="title-cont">
          <h2>Portfolio 📇</h2>
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
                  <p>{item.code}</p>
                  <p>{item.demo}</p>
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
