import React from "react";
import { FiDribbble } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <div className="footer-container">
        <div className="logo">
          <span>
            <p>ar </p>
          </span>
          <p>© 2021 Arnau Ros, LLC. All rights reserved.</p>
        </div>
        <div className="list-item">
          <ul>
            <li>
              <FaFacebookF size="30px" />
            </li>
            <li>
              <FaTwitter size="30px" />
            </li>
            <li>
              {" "}
              <FiDribbble size="30px" />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
