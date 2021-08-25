import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const Contents = () => {
  return (
    <React.Fragment>
      <div className="text-wrapper">
        <h4 className="content-text">Content Creation</h4>

        <div className="content-wrapper">
          <div>
            <p>
              Lorem ipsum YouTube dolor sit amet, consectetur adipiscing elit. A
              nisi, accumsan, ornare donec risus pharetra mattis in. YouTube
              elit. A nisi, accumsan, ornare donec risus pharetra mattis in.
              YouTube elit. A nisi, accumsan, ornare donec risus pharetra mattis
              in.
            </p>
            <p className="icon-and-text">
              Get in contact about a sponsorship{" "}
              <span>
                <AiOutlineArrowDown size="30px" />
              </span>
            </p>
          </div>
          <div>
            <iframe
              width="674px"
              height="376px"
              src="https://www.youtube.com/embed/E7wJTI-1dvQ"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contents;
