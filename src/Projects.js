import React, { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ExZero from "../src/svg/01Example.svg";
import ExOne from "../src/svg/02Example.svg";
import ExTwo from "../src/svg/03Example.svg";
import { ShowContext, ShowBodyContext, ShowProjects } from "./App";
// import CMSpage from "./componentts/CMSpage";

function Projects() {
  const { setShow } = useContext(ShowContext);
  const { setShowBody } = useContext(ShowBodyContext);
  const { setProject } = useContext(ShowProjects);
  const handleClick = () => {
    setShow(true);
    setShowBody(false);
    setProject(false);
  };
  return (
    <React.Fragment>
      <div className="text-wrapper">
        <h4 className="projects-text">Projects</h4>
      </div>

      <div className="project-pics-wrapper">
        <div onClick={handleClick}>
          <p>01Example</p>
          <img width="370px" height="557" src={ExZero} alt="not found" />
        </div>
        <div onClick={handleClick}>
          <p>02Example</p>
          <img width="370px" height="557" src={ExOne} alt="not found" />
        </div>
        <div onClick={handleClick}>
          <p>03Example</p>
          <img width="370px" height="557" src={ExTwo} alt="not found" />
        </div>
        <span className="project-icon">
          <AiOutlinePlusCircle size="50px" />
        </span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}

export default Projects;
