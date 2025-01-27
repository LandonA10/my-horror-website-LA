import React from "react";
import "./navBar.css"
export default function NavBar({ linkNames, sources}){
    return (
        <>
        <div className="navBarDiv">
        <span className="iconSpan">
          <img src="favicon.ico" className="icon" alt="webIcon"/>
        </span>
          <nav className="navBar">
            {linkNames.map((linkName, index) => (
              <NavLink key={index} linkName={linkName} source={sources[index]} />
            ))}
          </nav>
          </div>
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