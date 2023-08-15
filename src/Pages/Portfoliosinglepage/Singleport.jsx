import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import "./singleport.css";

const Singleport = () => {
  const { id } = useParams();
  console.log();

 

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
                  <img src="/logos/html.webp" alt="" />
                  <img src="/logos/html.webp" alt="" />
                  <img src="/logos/html.webp" alt="" />
                  <img src="/logos/html.webp" alt="" />
                  <img src="/logos/html.webp" alt="" />
                </div>

                <div className="content">
                  <h2>{item.title}</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas possimus ipsa magni in quae, itaque corrupti
                    blanditiis et sed odio quidem vel ratione reprehenderit eius
                    quibusdam ex cupiditate ipsam totam, fugit hic, id eum error
                    harum? Non eligendi veniam odit, reiciendis dolor tempora.
                    Voluptatem sunt maiores eos fugit nisi quisquam.
                  </p>
                  <br />
                  <p>
                    {item.desc}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                    exercitationem qui accusamus earum molestiae illum nisi
                    quisquam sequi veniam vitae odio, voluptatibus nesciunt
                    pariatur iusto dolor totam voluptatem labore cupiditate fuga
                    itaque id laborum assumenda voluptatum. Rerum, animi vero.
                    Alias, iure. Laudantium animi tempora recusandae laborum
                    mollitia inventore a quia dolorem, eveniet facilis provident
                    pariatur deserunt, eum nesciunt expedita excepturi ipsam
                    harum tenetur, illo numquam. Qui explicabo ratione harum,
                    praesentium tempore mollitia optio illum cum accusantium
                    voluptates dolore quia iste hic accusamus quo neque placeat
                    sint repellat? Praesentium fuga cum possimus libero nam
                    doloribus sit aliquid. Minima, ad nam? Labore!
                  </p>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam cupiditate dignissimos corrupti quaerat quisquam qui
                    reiciendis. Nihil vel rem nam voluptatem suscipit corrupti
                    cum laborum itaque ullam aliquam alias impedit veniam
                    ducimus corporis non nulla quos, in debitis hic consequuntur
                    quas odit. Libero ullam itaque iusto aspernatur tempora?
                    Consequuntur obcaecati veritatis iusto totam quisquam et
                    quidem! Veritatis numquam dolor modi harum aperiam velit
                    nihil earum quidem iste error ratione, odio deserunt ipsam
                    nobis perferendis necessitatibus distinctio, delectus sequi
                    alias fugit! Amet dignissimos voluptatem pariatur possimus!
                    Impedit dolorum rerum quibusdam natus, nesciunt rem sequi,
                    ipsum accusantium corporis enim illum amet voluptates?
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
                          <i className="fa-brands fa-github"></i>
                          Code
                        </div>
                      </Link>

                      <Link className="link" to={item.demo} target="_blank">
                        <div className="icon-set">
                          <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          Demo
                        </div>
                      </Link>
                      <Link
                        to={`/port-single/${item.id}`}
                        className="linkbtn btn-grad"
                        onClick={() => scrollToSection("top", 70)}
                      >
                        ReadMore
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
