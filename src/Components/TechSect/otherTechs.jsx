import React from "react";
import "./Othertech.css";

const OtherTechs = () => {
  return (
    <div className="width-100c">
      <div className="width-85 other-Tech-cont">
        <h2>Other Techs 🚀</h2>
        <div className="icon-cont">
          <div className="icon-w ">
            <img className="github" src="/logos/github.png" alt="github" />
            <p>Github</p>
          </div>

          <div className="icon-w">
            <img className="graphql" src="/logos/graphql.png" alt="graphql" />
            <p>GraphQL</p>
          </div>

          <div className="icon-w">
            <img className="docker" src="/logos/docker.png" alt="docker" />
            <p>Docker</p>
          </div>

          <div className="icon-w">
            <img className="nextjs" src="/logos/nextjs.png" alt="NextJs" />
            <p>NextJs</p>
          </div>

          <div className="icon-w">
            <img className="npm" src="/logos/npm.png" alt="npm" />
            <p>NPM</p>
          </div>

          <div className="icon-w">
            <img
              className="kubernates"
              src="/logos/kubernates.png"
              alt="kubernates"
            />
            <p>Kubernetes</p>
          </div>

          <div className="icon-w">
            <img className="vercel" src="/logos/vercel.png" alt="vercel" />
            <p>Vercel</p>
          </div>

          <div className="icon-w">
            <img className="auth" src="/logos/auth0.png" alt="auth" />
            <p>Auth0</p>
          </div>

          <div className="icon-w">
            <img className="mantine" src="/logos/mantine.png" alt="mantine" />
            <p>Mantine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherTechs;
