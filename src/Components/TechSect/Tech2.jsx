import "./Tech2.css";
const Tech2 = () => {
  return (
    <div className="width-100c">
      <div className="width-85 tech2-cont">
        <div className="tec2-left">
          <div className="icon-cont">
            <div className="icon-w ">
              <img className="node" src="/logos/nodejs.png" alt="node" />
              <p>NodeJs</p>
            </div>

            <div className="icon-w">
              <img className="express" src="/logos/express.png" alt="express" />
              <p>ExpressJs</p>
            </div>

            <div className="icon-w">
              <img className="mongo" src="/logos/mongo.png" alt="mongo" />
              <p>MongoDB</p>
            </div>

            <div className="icon-w">
              <img className="sql" src="/logos/sql.png" alt="sql" />
              <p>MySql</p>
            </div>

            <div className="icon-w">
              <img className="jwt" src="/logos/jwt.png" alt="jwt" />
              <p>JWt</p>
            </div>

            <div className="icon-w">
              <img className="prisma" src="/logos/prisma.png" alt="prisma" />
              <p>Prisma</p>
            </div>
          </div>
        </div>

        <div className="tec2-right">
          <h2>Server</h2>
          <h3>Side</h3>
        </div>
      </div>
    </div>
  );
};

export default Tech2;
