import React, { useEffect } from "react";
import "./qualifi.css";

const Qualificationpage = () => {
  useEffect(() => {
    scrollToSection("topQuali", 70);
  }, []);

  return (
    <div className="width-100c" id="topQuali">
      <div className="width-8 edu-cont3">
        <div className="edu-content1 ">
          <h3>School 🚌</h3>
          <p>10th-12th from Mp-Board </p>
          <p>Badri H.S.S (Indore)</p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>College 🏫</h3>
          <p>B.C.A (2nd Year Dropout) </p>
          <p>M.I.S.T (Indore)</p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>FrontEnd 🖥️</h3>
          <p>Udemy(Dr.Angela) &other Resources</p>
          <p>By Own In 3Months</p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>BackEnd 🗄️</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            labore quis voluptatem sed. Provident soluta ex sapiente enim?
            Natus, illum. Reprehenderit, consectetur! Aspernatur asperiores
            provident sint amet eius. Reprehenderit cum quidem perspiciatis
            nobis eum quis. Atque, pariatur ipsum molestias corporis ab facilis
            aliquid optio deserunt, asperiores eos dolorem assumenda! Assumenda
            enim nulla ea laboriosam optio perspiciatis fugiat quod sit dolorem
            vel! Asperiores nemo quod magni, eligendi rerum eius excepturi enim
            earum, minima doloremque quidem, sequi reprehenderit! Et reiciendis
            quo laboriosam libero asperiores. Rem, aperiam quam libero neque est
            incidunt similique commodi esse officiis voluptas repudiandae
            ratione! Labore sit odit non corrupti voluptates nulla ex facere
            illum. Harum nisi quo vitae beatae quibusdam laudantium illo,
            corporis officiis amet dicta, pariatur sunt dignissimos velit
            voluptas. Asperiores hic numquam dignissimos quos earum itaque
            tenetur quas assumenda nobis odit expedita sit neque cum rem, animi
            officiis nemo aliquid ex! Tenetur, deleniti. Atque, voluptate.
            Dolorem vel laudantium provident iste nulla consequuntur. Fuga,
            tenetur beatae. Incidunt unde vitae, dolore accusantium ea at omnis
            sit dignissimos quis ducimus ipsam sed necessitatibus, nulla qui
            tempora? Eligendi placeat cupiditate earum doloremque cum, expedita
            itaque asperiores nisi! Ducimus porro odio iure magnam velit
            temporibus natus, quisquam illum debitis. Amet, beatae nisi ad ex
            soluta nobis adipisci sunt quidem minima, hic repellendus provident
            culpa suscipit porro sed id vitae numquam inventore illum. Corporis
            quasi pariatur corrupti, nemo atque nesciunt error veritatis,
            repudiandae dolores vitae rerum dignissimos fuga est at enim earum
            similique quae fugiat nobis. Obcaecati, nostrum. Non earum
            laudantium provident!
          </p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>Still Learing New things</h3>
          <p>I will Update Soon</p>
        </div>
        <span className="line2"></span>
      </div>
    </div>
  );
};

export default Qualificationpage;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
