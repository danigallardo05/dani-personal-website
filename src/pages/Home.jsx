import React from "react";
import background from "../images/back.jpg";
import developer from "../images/developer.png";

const Home = () => {
  return (
    <div>
      <img src={background} className="bg" />

      <div className="title">
        <h1><b>Hi I'm Dani</b> </h1>
        {/* <img src={developer} className="developer" /> */}
      </div>
    
    <div className="subtitle">
        <h4>I'm a Full Stack Web Developer and UX|UI Designer.</h4>
    </div>

    </div>
  );
};

export default Home;
