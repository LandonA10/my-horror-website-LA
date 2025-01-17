import React from "react";

export default function NavBar({ linkNames, sources}){
    return (
        <>
        <span className="iconSpan">
          <img src="favicon.ico" className="icon" alt="webIcon"/>
        </span>
          <nav className="navBar">
            {linkNames.map((linkName, index) => (
              <NavLink key={index} linkName={linkName} source={sources[index]} />
            ))}
          </nav>
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