import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const About = () => {
  const [arrow, setArrow] = useState(true);
  const [text, showText] = useState("");

  const handleOpen = () => {
    setArrow(false);
    showText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elementum, etiam cras tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi sed pulvinar rutrum tempor. Etiam duis massa elem Starting at € 2,450"
    );
  };
  const handleClose = () => {
    setArrow(true);
    showText("");
  };

  return (
    <React.Fragment>
      <div className="text-wrapper">
        <h4 className="about-text">About Me</h4>

        <div className="about-wrapper">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
              nullam augue dolor libero at in. Egestas in elit vitae tincidunt
              morbi egestas nec massa. Pretium, placerat quis sem gravida vel
              quam nisl in semper. Platea enim nunc aliquam volutpat, ut sed
              morbi. Sit leo aliquam at amet, eu dictumst accumsan eu, quis. Nam
              ac mattis adipiscing euismod arcu ac laoreet vitae at. Nibh etiam
              dictumst nibh ut. Vitae massa rhoncus, et massa. Diam fermentum
              malesuada scelerisque orci massa.
            </p>
          </div>
          <div className="drop-down-collapsed">
            <p>Your one stop shop for: </p>
            <p>
              <span className="num-span">1</span> branding Logo{" "}
              <span className="icon-span">
                {arrow ? (
                  <RiArrowDropDownLine onClick={handleOpen} />
                ) : (
                  <RiArrowDropUpLine onClick={handleClose} />
                )}
              </span>
              <span className="drop-down-text">{text}</span>
              <span className="bottom-border"></span>
            </p>
            <hr />
            <p>
              <span className="num-span">2</span> Packaging{" "}
              <span className="icon-span">
                <RiArrowDropDownLine />
              </span>
              <span className="drop-down-text"></span>
            </p>
            <hr />
            <p>
              <span className="num-span">3</span> Websites{" "}
              <span className="icon-span">
                <RiArrowDropDownLine />
              </span>
              <span className="drop-down-text"></span>
            </p>
            <hr />
          </div>
        </div>
      </div>
      <div className="scroll-item">
        <ul>
          <li>Photoshop </li>
          <li>Illustrator</li>
          <li>Webflow</li>
          <li>Figma </li>
          <li>Indesign</li>
          <li>Premiere Pro</li>
          <li>Cinema 4D </li>
          <li>Sketch</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default About;
