import React from "react";
import "../navBar.css"
import NavBar from "../navbar";
import "./regions.css";
export default function Regions(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "./regions", ""];
    return (
        <>
            <div className="body">
                <div className="navBarDiv">
                    <NavBar linkNames={linkNames} sources={sources} />
                </div>
                <div className="webpageDiv">
                <div className="headingDiv ">
                    <h1 className="header">The Four Great Regions of Mytharelm</h1>
                    <img src="favicon.ico" alt="icon" className="regionIcon"/>
                    <h2 className="description">Explore the regions</h2>
                </div>
                <section className="regionSect">
                    <div className="regionContainerTop">
                    <RegionSquare name={"The Land of Mour"} link={"./regions/landOfMour"}/>
                    <RegionSquare name={"The Fallen Isles"} />
                    </div>
                    <div className="regionContainerBottom">
                    <RegionSquare name={"The Howling Highlands"} />
                    <RegionSquare name={"The Shadowed Expanse"} />
                    </div>
                </section>
                </div>
            </div>
        </>
    )
}

function RegionSquare({name, link}){
    return (
        <>
            <div className="regionDiv">
                <a className="regionLink" href={link}><h3 className="regionName">{name}</h3></a>
            </div>
        </>
    )
}