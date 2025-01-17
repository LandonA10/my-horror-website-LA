import React from "react";
import "../navBar.css"
import NavBar from "../navbar";
import "./regions.css";
export default function regions(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "", ""];
    return (
        <>
            <div className="body">
                <div className="navBarDiv">
                    <NavBar linkNames={linkNames} sources={sources} />
                </div>
                <div className="webpageDiv">
                <div className="headingDiv ">
                    <h1 className="header">The Four Great Regions of Mytharelm</h1>
                    {/* icon */}
                    <h2 className="description">Explore the regions</h2>
                </div>
                <section className="regionSect">
                    <div className="regionContainerTop">
                    <RegionSquare name={"The Land of Mour"} />
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

function RegionSquare({name}){
    return (
        <>
            <div className="regionDiv">
                <h3 className="regionName">{name}</h3>
            </div>
        </>
    )
}