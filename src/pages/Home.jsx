import React from "react";
import background from "../images/back.jpg";
import code from "../images/code.png";

const Home = () => {
  return (
    <div>
      <img src={background} className="bg" />

      <div className="title">
        <h1>
          <b>Hi I'm Dani</b>{" "}
        </h1>
      </div>

      <div className="subtitle">
        <h4>I'm a Full Stack Web Developer and UX|UI Designer.</h4>
      </div>

      <br />
      <br />
      <br />

      <div className="secondBlock">
        <div>
          <h1>Check out what I have done</h1>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>

      <div className="thirdBlock">
        <div></div>
        <div></div>
        <div></div>
        
      </div>
    </div>
  );
};

export default Home;
