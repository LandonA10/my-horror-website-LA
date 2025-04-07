import React from "react";
import NavBar from "../navbar";
import "./regions.css";
export default function Regions(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "./regions", ""];
    return (
        <>
            <div className="body">
                
                <NavBar linkNames={linkNames} sources={sources}/>
                <div className="webpageDiv">
                <div className="headingDiv ">
                    <h1 className="headerH1">The Four Great Regions of Mytharelm</h1>
                    <img src="favicon.ico" alt="icon" className="regionIcon"/>
                    <h2 className="description">Explore the regions</h2>
                </div>
                <section className="regionSect">
                    <div className="regionContainerTop">
                    <RegionSquare name={"The Land of Mour"} link={"./regions/landOfMour"} src={"../landOfMourPreviewImg.jpg"}/>
                    <RegionSquare name={"The Fallen Isles"} link={"./regions/theFallenIsles"} src={"../fallenIslesPreviewImg.jpg"}/>
                    </div>
                    <div className="regionContainerBottom">
                    <RegionSquare name={"The Howling Highlands"} link={"./regions/theHowlingHighlands"} src={"../howlingHighlandsPreviewImg.jpg"}/>
                    <RegionSquare name={"The Shadowed Expanse"} link={"./regions/theShadowedExpanse"}src={"../shadowedExpansePreviewImg.jpg"} />
                    </div>
                </section>
                </div>
            </div>
        </>
    )
}

function RegionSquare({name, link,src}){
    return (
        <>
            <div className="regionDiv">
                <img src={src} class= "regionImgPreview"></img>
                <a className="regionLink" href={link}><h3 className="regionName">{name}</h3></a>
            </div>
        </>
    )
}