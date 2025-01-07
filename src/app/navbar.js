import React from "react";

export default function NavBar({ linkNames, sources}){
    return (
        <>
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