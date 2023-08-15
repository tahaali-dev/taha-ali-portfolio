import { Link } from "react-router-dom";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div className="width-100c">
      <div className="width-85 aboutpage-cont">
        <div className="top-about">
          <div className="left">
            <h2>
              Hello, I'm <span>Taha Ali</span>.
            </h2>
            <p>
              I appreciate you stopping by my about page to get to know me
              better. <span>Thank you!</span>
            </p>
          </div>

          <div className="right">
            <img src="/image.jpg" alt="aboutimage" />
          </div>
        </div>

        <div className="middle-about">
          <h2>Who I Am </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat id vero quo libero non sit delectus mollitia nobis
            praesentium nulla. Iste deleniti possimus cum quas vitae, eligendi
            id nobis, vel fuga ea fugiat expedita itaque iusto facere soluta
            praesentium suscipit tenetur delectus aut, saepe nulla voluptatum
            repellendus. Vel nesciunt recusandae ex magnam, voluptates nihil ut
            iure, aspernatur cumque praesentium necessitatibus dolores dolore ab
            consequuntur magni quaerat beatae aperiam repellat. Modi cum
            consequatur facilis ducimus nam! Odio quaerat autem impedit quasi.
            Ipsum adipisci consequuntur maxime nihil quibusdam, veniam soluta ea
            voluptates et architecto, ratione modi itaque perspiciatis voluptate
            aperiam dignissimos.
          </p>
          <br />
          <h2>How i Become A Web Developer </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat id vero quo libero non sit delectus mollitia nobis
            praesentium nulla. Iste deleniti possimus cum quas vitae, eligendi
            id nobis, vel fuga ea fugiat expedita itaque iusto facere soluta
            praesentium suscipit tenetur delectus aut, saepe nulla voluptatum
            repellendus. Vel nesciunt recusandae ex magnam, voluptates nihil ut
            iure, aspernatur cumque praesentium necessitatibus dolores dolore ab
            consequuntur magni quaerat beatae aperiam repellat. Modi cum
            consequatur facilis ducimus nam! Odio quaerat autem impedit quasi.
            Ipsum adipisci consequuntur maxime nihil quibusdam, veniam soluta ea
            voluptates et architecto, ratione modi itaque perspiciatis voluptate
            aperiam dignissimos.
          </p>
          <br />
          <h2>How's My Journey </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat id vero quo libero non sit delectus mollitia nobis
            praesentium nulla. Iste deleniti possimus cum quas vitae, eligendi
            id nobis, vel fuga ea fugiat expedita itaque iusto facere soluta
            praesentium suscipit tenetur delectus aut, saepe nulla voluptatum
            repellendus. Vel nesciunt recusandae ex magnam, voluptates nihil ut
            iure, aspernatur cumque praesentium necessitatibus dolores dolore ab
            consequuntur magni quaerat beatae aperiam repellat. Modi cum
            consequatur facilis ducimus nam! Odio quaerat autem impedit quasi.
            Ipsum adipisci consequuntur maxime nihil quibusdam, veniam soluta ea
            voluptates et architecto, ratione modi itaque perspiciatis voluptate
            aperiam dignissimos.
          </p>
          <br />
          <h2>My Hobbies and Interests </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat id vero quo libero non sit delectus mollitia nobis
            praesentium nulla. Iste deleniti possimus cum quas vitae, eligendi
            id nobis, vel fuga ea fugiat expedita itaque iusto facere soluta
            praesentium suscipit tenetur delectus aut, saepe nulla voluptatum
            repellendus. Vel nesciunt recusandae ex magnam, voluptates nihil ut
            iure, aspernatur cumque praesentium necessitatibus dolores dolore ab
            consequuntur magni quaerat beatae aperiam repellat. Modi cum
            consequatur facilis ducimus nam! Odio quaerat autem impedit quasi.
            Ipsum adipisci consequuntur maxime nihil quibusdam, veniam soluta ea
            voluptates et architecto, ratione modi itaque perspiciatis voluptate
            aperiam dignissimos.
          </p>
          <br />
          <h2>Future Goals </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            repellat id vero quo libero non sit delectus mollitia nobis
            praesentium nulla. Iste deleniti possimus cum quas vitae, eligendi
            id nobis, vel fuga ea fugiat expedita itaque iusto facere soluta
            praesentium suscipit tenetur delectus aut, saepe nulla voluptatum
            repellendus. Vel nesciunt recusandae ex magnam, voluptates nihil ut
            iure, aspernatur cumque praesentium necessitatibus dolores dolore ab
            consequuntur magni quaerat beatae aperiam repellat. Modi cum
            consequatur facilis ducimus nam! Odio quaerat autem impedit quasi.
            Ipsum adipisci consequuntur maxime nihil quibusdam, veniam soluta ea
            voluptates et architecto, ratione modi itaque perspiciatis voluptate
            aperiam dignissimos.
          </p>
          <div className="button-cont">
          <Link to="/contact-taha" className="blackbutton ">
          Get In Touch
        </Link>
        </div>

        </div>
       
      </div>
    </div>
  );
};

export default AboutPage;
