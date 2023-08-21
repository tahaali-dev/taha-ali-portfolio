import { Link } from "react-router-dom";
import "./aboutpage.css";
import { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    scrollToSection("top", 70);
  }, []);

  return (
    <div className="width-100c" id="top">
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
            Hey there, My full Name is Taha Mill Wala, and I'm proud to call
            Indore my home sweet home. I spent my school days right here,
            learning lots of cool stuff.
            <br />
            My family is just like yours and mine – middle-class and
            hardworking. I believe in keeping things simple and adding a splash
            of creativity whenever I can.
            <br />
            I started my journey by taking up a BCA course at a tier-3 college
            in Indore. But you know what? I had my eyes set on something else. I
            felt the pull of web development, and in my second year of college,
            I decided to go all-in. I dropped out to chase my passion, and
            that's where my web development journey began.
            <br />
            Think of me as someone who's learning to create websites from top to
            bottom. I mean, making them look amazing and work super smoothly.
            And guess what? I learned it all on my own! I explored tons of free
            stuff on the internet to figure it out.
          </p>
          <br />
          <h2>How i Become A Web Developer </h2>
          <p>
            From my college days, I've been curious about how websites actually
            work. This curiosity set me on a path that led to my love for web
            development. I started small, learning things like HTML, CSS, and
            JavaScript from YouTube and other websites. But I wanted a clear
            roadmap, a step-by-step guide to really understand this stuff. So, I
            found a course on Udemy.
            <br />
            That course was a game-changer. It gave me a solid foundation and
            showed me the way forward. I learned the basics and then went deeper
            into certain topics. It was like piecing together a puzzle, and
            soon, I had a good grasp of front-end development.
            <br />
            With front-end conquered, I turned to the backend. I learned from
            big-name companies' websites, following their examples to understand
            the backend world. As I learned, I felt more confident and curious
            about advanced topics.
            <br />
            And then I went on to explore advanced concepts in web development.
          </p>
          <br />
          <h2>How's My Journey </h2>
          <p>
            It wasn't a short journey – it took around 8-9 months of
            self-learning. But through all the challenges and discoveries, I
            grew into a web developer.
            <br />
            My journey is long and full of stories. If you're interested in
            knowing more about the ups and downs, the 'aha' moments, and the
            lessons I've learned,{" "}
            <Link to="/contact-taha">feel free to ask.</Link> Let's dive deeper
            into the adventure that shaped me as a web developer."
          </p>
          <br />
          <h2>My Hobbies and Interests </h2>
          <p>
            🌐 Exploring New Digital Realms: I love making websites, especially
            when I get to explore things I don't know yet. It's like solving a
            puzzle and creating a whole new online world.
          </p>
          <hr />
          <p>
            🤖 Chatting with AI Friends: Ever tried talking to AI chatbots? It's
            pretty cool! I enjoy chatting with them, like ChatGPT. It's amazing
            how they can have fun conversations with us.
          </p>
          <hr />
          <p>
            💻 Having Fun with Code: I play around with JavaScript, CSS, and
            React. It's like using digital tools to make websites look awesome
            and work smoothly. It's like crafting in the digital world!
          </p>
          <hr />
          <p>
            📚 Book Adventures: When I'm not online, I'm into books. I enjoy all
            sorts of reads, from fiction to techie stuff. Books take me to
            different worlds and inspire me.
          </p>
          <hr />
          <p>
            👀 Checking Out Others' Work: I love looking at what other people
            have created with code. It's like exploring different digital
            masterpieces. It helps me learn new tricks and styles.
          </p>
          <hr />
          <p>
            These are the things that make me smile and keep me curious. They're
            like the colorful pieces of a puzzle that make up my world!"
          </p>
          <br />
          <h2>Future Goals </h2>
          <p>
            -Web Expertise: I want to become amazing at making websites. I'll
            keep practicing until I'm a true pro. 💻🚀
            <br />
            -Being Creative: I aim to make websites that blow people's minds. I
            want to create stuff that's both useful and super cool. 🎨✨
            <br />
            -Helping Others: I'd love to teach others what I've learned. I want
            to help new developers get started on their journey. 📚🤝
            <br />
            -Teamwork: I dream of working with other smart people. Together, we
            can make something amazing. 👥🤗
            <br />
            -New Tech : I'm excited to learn about new tech stuff. The tech
            world changes a lot, and I want to keep up with the latest. 🌐🔍
            <br />
            -Impactful Stuff: I want to build things that actually matter. I
            want it to make a positive difference. 🌟🌍
            <br />
            -Always Learning: There's so much to learn, and I'm up for the
            challenge. I'll keep learning, growing, and getting better. 🧠📈
          </p>
          <div className="button-cont">
            <Link to="/contact-taha" className="blackbutton ">
              Reach Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

const scrollToSection = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (element) {
    const topPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: topPosition - offset, behavior: "smooth" });
  }
};
