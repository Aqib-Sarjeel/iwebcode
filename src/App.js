import React, { useState } from "react";
import "./App.css";
import Navbar from "./componentts/Navbar";
import Body from "./componentts/Body";
import Projects from "./Projects";
import Contents from "./componentts/Contents";
import About from "./About";
import Client from "./componentts/Client";
import HelloForm from "./componentts/HelloForm";
import Footer from "./componentts/Footer";
import CMSpage from "./componentts/CMSpage";
export const ShowContext = React.createContext();
export const ShowBodyContext = React.createContext();
export const ShowProjects = React.createContext();

function App() {
  const [show, setShow] = React.useState(false);
  const [showBody, setShowBody] = useState(true);
  const [project, setProject] = useState(true);

  return (
    <ShowContext.Provider value={{ show: show, setShow: setShow }}>
      <ShowBodyContext.Provider
        value={{ showBody: showBody, setShowBody: setShowBody }}
      >
        <ShowProjects.Provider
          value={{ project: project, setProject: setProject }}
        >
          <div className="App">
            <Navbar />
            {show && <CMSpage />}
            {showBody && <Body />}
            {project && <Projects />}
            <Contents />
            <About />
            <Client />
            <HelloForm />
            <Footer />
          </div>
        </ShowProjects.Provider>
      </ShowBodyContext.Provider>
    </ShowContext.Provider>
  );
}

export default App;
