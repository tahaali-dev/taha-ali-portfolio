import React, { useEffect } from "react";
import "./qualifi.css";
import { Link } from "react-router-dom";

const Qualificationpage = () => {
  useEffect(() => {
    scrollToSection("top", 70);
  }, []);

  return (
    <div className="width-100c" id="top">
      <div className="width-8 edu-cont3">
        <span className="line2"></span>

        <div className="edu-content1 ">
          <h3>School-Where My Journey Began 🎒</h3>
          <p>
            I started my education at the Basic Community School in Indore, and
            I completed both my 10th and 12th grades there. It's like the
            beginning of my education story.My teachers were really awesome.
            They didn't just teach subjects; they talked about life and jobs
            too. It was like getting extra wisdom with my lessons.Thinking back,
            my school days were a mix of learning, making friends, and growing
            up. I keep those memories close.
          </p>
          <hr />
          <p>
            As I look ahead, there's a quote I like: "Education is the passport
            to the future, for tomorrow belongs to those who prepare for it
            today." - Malcolm X
          </p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>College-Finding My Way 🎓</h3>
          <p>
            After school, I went to a college called Malwa Institute of Science
            and Technology in Indore. I started with BCA.In my second year, I
            discovered something I loved – web development. It was like solving
            a puzzle I didn't know I had. I learned from seniors and the
            internet.Money troubles led me to leave college. But I didn't give
            up on web development. I learned about making websites look great
            and work smoothly.College taught me to follow my dreams, and now I'm
            a web developer, making digital magic happen.
          </p>
          <hr />
          <p>
            Looking back, I remember this quote: "The only limit to our
            realization of tomorrow will be our doubts of today." - Franklin D.
            Roosevelt
          </p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>Frontend-Crafting web Front 🌐</h3>
          <p>
            🎬 Learning from the Web: I began my web development journey with
            YouTube and online resources like CodeWithHarry and W3Schools. It's
            like learning to build with the help of the internet.
            <br />
            💻 The HTML and CSS Beginnings: My first step was to master HTML and
            CSS, the building blocks of web pages. YouTube tutorials showed me
            the ropes and helped me create awesome layouts.
            <br />
            📜 Embracing JavaScript: To add life to my creations, I dived into
            JavaScript. It's a versatile language used for both frontend and
            backend. I learned from CodeWithHarry and other resources, turning
            concepts into interactive elements.
            <br />
            🛤️ Finding Clarity with Udemy: A bit confused about my path, I took
            a Udemy course that laid out a clear roadmap for full stack web
            development. Dr. Angela, one of Udemy's top creators, guided me
            through a treasure trove of knowledge.
            <br />
            ⚛️ Mastering React and More: The Udemy course introduced me to
            React, Bootstrap, advanced CSS properties, and handy React
            libraries. It was like adding superpowers to my frontend arsenal.
            <br />
            📚 Beyond Udemy: Dr. Angela's guidance aside, I expanded my horizons
            with Infosys Springboard's full stack web development course. It was
            a deep dive into concepts that made me a well-rounded developer.
            <br />
            🌟 The Finishing Touch with Tailwind: To speed up styling, I
            embraced Tailwind. It's like a magic wand for crafting sleek designs
            in no time.
            <br />
            🔮 State Management and API Handling: For state management, I
            embraced Redux Toolkit, a powerful tool. And for handling APIs, I
            turned to React Query, which made data fetching and management a
            breeze.
          </p>
          <hr />
          <p>
            As I reflect on my frontend journey, I'm reminded of this quote:
            "The expert in anything was once a beginner." - Helen Hayes
          </p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>Into the Backend World 🛠️</h3>
          <p>
            🚀 Getting Started: I jumped into backend stuff using npm, Node.js,
            and Express. Dr. Angela's Udemy course was like a guide on this
            exciting journey.
            <br />
            🌐 Learning the Tech: I tackled APIs, routes, and controllers. It
            was like learning the buttons that make websites work.
            <br />
            📡 Making Things and Testing: I made APIs and tried them out using
            Postman. It was like seeing my digital creations come to life.
            <br />
            💽 Playing with Databases: I used MongoDB and later tried MySQL. It
            was like learning the secret code to store and manage information.
            <br />
            🔒 Adding Protection: I added security with JWT and bcrypt. It was
            like giving my digital creations strong locks.
            <br />
            🚀 Bootcamp Adventures: I also joined bootcamps like Devtown's 7-day
            backend bootcamp and Microsoft Learn Student Ambassador boot camp.
            These cool experiences added to my journey.
            <br />
            ⚙️ Building the Final Backend: Step by step, I built a full backend
            system. It's like turning ideas into real digital things.
            <br />
            🔗 Bringing It All Together: Combining backend with frontend felt
            like putting together a puzzle. Websites started to work like magic!
          </p>
          <hr />
          <p>
            As I think back on my backend journey, I'm reminded of this saying:
            "Today's actions shape tomorrow." - Mahatma Gandhi
          </p>
        </div>
        <span className="line2"></span>

        <div className="edu-content1">
          <h3>Still Learing New things 🚀</h3>
          <p>
            🐳 Docker and Kubernetes: I've delved into containerization and
            orchestration with Docker and Kubernetes. It's like packaging and
            managing digital worlds, making deployment smoother.
            <br />
            ☁️ Amazon Web Services (AWS): I'm diving into the cloud with AWS,
            learning how to harness its power to create scalable and reliable
            applications. It's like having a toolbox full of resources.
            </p>
            <hr />
            <p>
            The path of discovery is infinite, and I'm excited to see where my
            insatiable curiosity takes me next."
            </p>
        </div>
        <span className="line2"></span>

        <Link to="/certs-sec" className="certisect">
          <h2>Glimpse into My Certifications🔍</h2>
        </Link>
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
