import React, { useEffect, useContext } from "react";
import { ShowContext, ShowProjects, ShowBodyContext } from "../App";

const Navbar = () => {
  const { setShow } = useContext(ShowContext);
  const { setShowBody } = useContext(ShowBodyContext);
  const { setProject } = useContext(ShowProjects);

  const handleClick = () => {
    setShow(false);
    setShowBody(true);
    setProject(true);
  };
  useEffect(() => {
    document.body.style.background = "#E5E5E5";
  });
  return (
    <React.Fragment>
      <div className="header-container">
        <div className="logo" onClick={handleClick}>
          <span>
            <p>ar</p>
          </span>
        </div>
        <div className="list-item">
          <ul>
            <li className="active">Work</li>
            <li>About</li>
            <li>Contact</li>
            <li>Other</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
