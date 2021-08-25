import React from "react";
import CMSone from "../svg/CMS01.svg";
import CMStwo from "../svg/CMS02.svg";
import CMSthree from "../svg/CMS03.svg";
import CMSfour from "../svg/CMS04.svg";
import CMSfive from "../svg/CMS05.svg";
import CMSsix from "../svg/CMS06.svg";
import CMSseven from "../svg/CMS07.svg";

const CMSpage = () => {
  return (
    <React.Fragment>
      <div className="cms-wrapper-image">
        <div>
          <img src={CMSone} alt="not found" />
        </div>
      </div>
      <div className="cms-text-wrapper">
        <h2>Title of Project </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna feugiat
          maecenas eu imperdiet varius nec pulvinar sem ultrices. Adipiscing
          viverra mauris, nunc nisl sociis dui. Sagittis, curabitur libero urna
          interdum metus.
        </p>
      </div>

      <img className="individual-image-cms" src={CMStwo} alt="not found" />

      <div className="cms-image-wrapper-two">
        <img src={CMSthree} alt="not found" />
        <img src={CMSfour} alt="not found" />
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>More Projects</h2>
      </div>
      <div className="cms-image-wrapper-3">
        <img src={CMSfive} alt="not found" />
        <img src={CMSsix} alt="not found" />
        <img src={CMSseven} alt="not found" />
      </div>
    </React.Fragment>
  );
};

export default CMSpage;
