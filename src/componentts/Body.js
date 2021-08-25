import React from "react";
import Eagle from "../svg/Eagle.svg";
const Body = () => {
  return (
    <React.Fragment>
      <div className="body-wrapper">
        <h1>
          I’m Arnau Ros, a graphic designer & content creator based in
          Barcelona. Available for freelance & collaborations.{" "}
        </h1>

        <div className="item">
          <div className="image-container">
            <img height="564px" width="606px" src={Eagle} alt="not found" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
};

export default Body;
