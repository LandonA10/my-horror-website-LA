import "./styles.css";
import React from "react";

export default function App() {
  return (
    <>
      <div className="navBarDiv">
        <NavBar>
          <span className="links">
            <NavLink linkName={"Characters"} source={""} />
            <NavLink linkName={"Lore"} source={""} />
            <NavLink linkName={"Background"} source={""} />
          </span>
        </NavBar>
      </div>
      <section className="infoSection">
        <div className="writingDiv">
          <h1 className="welcomeH1">Welcome</h1>
          <div className="prghDiv">
            <p>
              Welcome to my website, this website is a personal project that I
              will be trying to consistently update. This project will be
              testing my web development skills as well as my creativity skills
              in writing and drawing.
            </p>
          </div>
          <Button title={"Start Exploring"} href="" />
        </div>
        <div className="picDiv">
          <div className="coverPic"></div>
        </div>
      </section>
    </>
  );
}

function NavBar({ children }) {
  return (
    <>
      <nav className="navBar">{children}</nav>
    </>
  );
}

function NavLink({ linkName, source }) {
  return (
    <>
      <a className="navLink" href={source}>
        {linkName}
      </a>
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
