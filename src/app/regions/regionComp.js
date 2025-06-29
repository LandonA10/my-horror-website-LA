import React from "react";
import "./regionComp.css";
import NavBar from "../navbar";
export default function RegionInfo({name, images, background, history, geography, exploration}){
    
    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "./regions", ""];

    return (
        <>
           <div className="webPageDiv">
                <section className="infoSection">
                    <img className="regionImg" src={images[0]} alt= "img"></img>
                    <h1>{name}</h1>
                </section>

                <section className="infoSection">
                    <h2 className="backgroundH2">Background</h2>
                    <div className="sectionContentDiv">
                        <img className="backgroundImg img" src={images[1]} alt= "img"></img>
                        <p className="backgroundPara">{background}</p>
                    </div>
                </section>

                <section className="infoSection">
                    <h2>History</h2>
                    <p>{history}</p>
                </section>

                <section className="infoSection">
                    <h2>Geography and Landscape</h2>
                    <div className="geoImgDiv">
                        <img className="geoImg img" src={images[2]} alt= "img"></img>
                        <img className="geoImg img" src={images[3]} alt= "img"></img>
                        <img className="geoImg img" src={images[4]} alt= "img"></img>
                    </div>
                    <p>{geography}</p>
                </section>

                <section className="infoSection">
                    <h2>Exploration</h2>
                    <img className="expImg img" src={images[5]} alt= "img"></img>
                    <p>{exploration}</p>
                </section>
                
                </div> 
        </>
    )
}