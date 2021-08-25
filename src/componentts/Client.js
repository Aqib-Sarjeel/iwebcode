import React from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from "react-icons/ri";

const Client = () => {
  return (
    <React.Fragment>
      <div className="text-wrapper">
        <h4 className="client-text">What Clients Say</h4>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="client-content">
        <br />
        <br />
        <br />
        <div>
          <span>
            <RiArrowLeftCircleLine size="50px" />
          </span>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
            “I rehired Arnau to do some additional design work for my private
            label brand. Again, he was creative and efficient in bringing my
            ideas to fruition. Thanks Arnau”
            <br />
            <br />
            -Ronald Weasley
            <br />
            CEO
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div>
          <React.Fragment>
            <span className="dummy-span-c">
              <RiArrowRightCircleLine size="50px" />
            </span>
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Client;
