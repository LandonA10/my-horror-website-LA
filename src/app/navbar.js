import React from "react";

export default function NavBar({ }){
    return (
        <>
          <nav className="navBar">
            <NavLink></NavLink>
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