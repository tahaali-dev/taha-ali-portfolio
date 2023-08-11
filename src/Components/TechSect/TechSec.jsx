import "./TechSect.css";

const TechSec = () => {
  return (
    <div className="width-100">
      <div className="width-85 Tech-cont">
        <h2>FrontEnd Technology's I Know🚀</h2>
        <div className="icon-cont">
          <div className="icon-w ">
            <img className="html" src="/logos/html.webp" alt="Html" />
            <p>Html</p>
          </div>

          <div className="icon-w">
            <img className="css" src="/logos/css.webp" alt="Css" />
            <p>Css</p>
          </div>

          <div className="icon-w">
            <img
              className="tailwind"
              src="/logos/tailwind css.png"
              alt="Tailwind"
            />
            <p>Tailwind</p>
          </div>

          <div className="icon-w">
            <img className="js" src="/logos/javascript.png" alt="JavaScript" />
            <p>JavaScript</p>
          </div>

          <div className="icon-w">
            <img
              className="typescript"
              src="/logos/typescript.png"
              alt="typescript"
            />
            <p>TypeScript</p>
          </div>

          <div className="icon-w">
            <img className="react" src="/logos/react.png" alt="React" />
            <p>React</p>
          </div>

          <div className="icon-w">
            <img className="vite" src="/logos/vite.png" alt="vite" />
            <p>Vite</p>
          </div>

          <div className="icon-w">
            <img className="redux" src="/logos/redux.png" alt="redux" />
            <p>Redux Toolkit</p>
          </div>

          <div className="icon-w">
            <img className="query" src="/logos/query.png" alt="query" />
            <p>React Query</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSec;
