import React from "react";
import { data } from "../../data/data";

const Card = () => {
  return (
    <>
      {data.slice(0,2).map((item) => (
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
    </>
  );
};

export default Card;
