import "./styles.css";
import "./navBar.css"
import React from "react";
import NavBar from "./navbar";
export default function App() {
  // Laptop test
  const linkNames = ["Characters", "Regions", "Background"];
  const sources = ["./characters", "./regions", ""];
  return (
    <>
      
     <NavBar linkNames={linkNames} sources={sources} />
      <section className="infoSection">
        <div className="writingDiv">
          <h1 className="welcomeH1">Welcome</h1>
          <div className="prghDiv">
            <p>
              to my website, this website is a personal project that I
              will be trying to consistently update. This project will be
              testing my web development skills as well as my creativity skills
              in writing and drawing.
            </p>
          </div>
          <Button title={"Start Exploring"} link="./characters" />
        </div>
        <div className="picDiv">
          <div className="coverPic"></div>
        </div>
      </section>
    </>
  );
}



function Button({ title, link }) {
  return (
    <>
      <div className="buttonDiv">
        <a href={link}>
          <button>{title}</button>
        </a>
      </div>
    </>
  );
}
