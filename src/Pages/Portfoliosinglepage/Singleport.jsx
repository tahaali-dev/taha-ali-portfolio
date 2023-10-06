import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import "./singleport.css";
import { FaGitSquare } from "react-icons/fa";

const Singleport = () => {
  const { id } = useParams();
  console.log();

  useEffect(() => {
    scrollToSection("top", 70);
  }, []);

  // load more Function
  const intialcardload = 2;
  const itemperpage = 2;

  const [itemsToShow, setItemsToShow] = useState(intialcardload);

  const handleLoadMore = () => {
    setItemsToShow(itemsToShow + itemperpage);
  };

  return (
    <div className="width-100c">
      <div className="width-85 sing-port-cont" id="top">
        {data
          .filter((item, index) => {
            if (id === item.id) {
              return item;
            }
          })
          .map((item, index) => (
            <Fragment key={index}>
              {/* Top Section */}
              <div className="top-sing">
                {/* top-left */}
                <div className="left">
                  <img src={item.image} alt="img1" />
                </div>
                {/* top-right */}
                <div className="right">
                  <div className="card-icon">
                    <Link className="link" target="_blank" to={item.code}>
                      <div className="icon-set">
                        <i className="fa-brands fa-github"></i>
                        Code
                      </div>
                    </Link>

                    <Link className="link" target="_blank" to={item.demo}>
                      <div className="icon-set">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        Demo
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* middle Section */}
              <div className="middle">
                <div className="tech-stack">
                  <img src="/logos/html.webp" alt="html" />
                  <img src="/logos/css.webp" alt="css" />
                  <img src="/logos/java.png" alt="javascript" />
                  <img src="/logos/react.png" alt="react" />
                  <img src="/logos/redux.png" alt="redux" />
                  <img src="/logos/query.png" alt="reactquery" />
                  <img src="/logos/nodejs.png" alt="nodejs" />
                  <img src="/logos/mongo.png" alt="mongodb" />
                </div>

                <div className="content">
                  <h2>{item.title}</h2>
                  <p>
                    Taskify redefines task management in educational settings by
                    providing a comprehensive and user-centric platform for
                    students and teachers alike. With its robust features,
                    intuitive interface, and focus on collaboration, Taskify
                    empowers users to stay organized, enhance productivity, and
                    foster effective communication in the classroom. Whether
                    you're a student looking to manage your workload or a
                    teacher seeking to streamline assignments, Taskify is your
                    go-to solution for efficient task management. Try Taskify
                    today and experience the future of educational task
                    management.
                  </p>
                  <br />
                  <p>
                    <hr />
                    {item.p1}
                  </p>

                  <p>
                    <hr />
                    {item.p2}
                  </p>
                </div>
              </div>
            </Fragment>
          ))}

        {/* Bottom Section */}
        <div className="bottom">
          <h2>More Projects</h2>
          <div className="grid-card-cont ">
            {data
              .filter((item, index) => {
                if (id !== item.id) {
                  return item;
                }
              })
              .slice(0, itemsToShow)
              .map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default Singleport;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
