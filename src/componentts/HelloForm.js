import React from "react";
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs";

const HelloForm = () => {
  return (
    <React.Fragment>
      <div className="text-wrapper">
        <h4 className="hello-text">Say Hello</h4>
      </div>
      <div className="form-wrapper">
        <div>
          <p>
            Looking to start a new project or just want to say hi? Send me an
            email and I’ll do my best to reply within 24 hrs!
            <br />
          </p>
          <p>
            If contact forms aren’t your thing... send me an email at
            hello@arnau.design
          </p>
        </div>
        <div>
          <form>
            <label>Name *</label>
            <input type="text" placeholder="First Name" />
            <input type="" placeholder="Last Name" />
            <br />
            <div>
              <label>Inquiry *</label>
              <input type="text" placeholder="Inquiry" />
              <label>Email *</label>
              <input type="text" placeholder="Email" />
            </div>
            <br />
            <label>Message</label>
            <textarea type="text" placeholder="Message" />
            <br />
            <button>Send</button>
          </form>
        </div>
      </div>

      {/* recent blog ============================================== */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="blog-heading">
        <h2>Recent blogs</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="blog-wrapper">
        <div className="item-one">
          <p>
            Competition: win a N02 Recycle counter chair by Nendo for Fritz
            Hansen
          </p>
          <p>24.09.21</p>
          <p>
            See Now{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </p>
        </div>
        <div>
          <p>The ULTIMATE Figma UI Kit (Tailwind-Figma)</p>
          <p>24.09.21</p>
          <p>
            See Now{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </p>
        </div>
        <div>
          <p>The Pros and Cons of a Logo without scaling possibilities.</p>
          <p>24.09.21</p>
          <p>
            See Now{" "}
            <span>
              <BsArrowUpRight />
            </span>
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />

      {/* news settler start here==================================================================== */}

      <div className="news-settler-wrapper">
        <h2>Join the Newsletter!</h2>
        <p>
          You’ll receive an email every once in a while about new products,
          courses, and videos!
        </p>

        <div className="news-settler-input">
          <input type="text" placeholder="name@example.com" />
          <button>
            <BsArrowRight size="25px" />
          </button>
        </div>
        <p style={{ color: "#6B7280" }}>
          We’ll never share your details. See our Privacy Policy
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
    </React.Fragment>
  );
};

export default HelloForm;
