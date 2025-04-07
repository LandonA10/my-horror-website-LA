import React from "react";
import "./regionComp.css";

export default function RegionInfo({name, images, background, history, geography, exploration}){
    return (
        <>
           <div className="webPageDiv">
                
                <section className="infoSection">
                    <img className="regionImg" src={images[0]} alt= "img"></img>
                    <h1>{name}</h1>
                </section>

                <section className="infoSection">
                    <h2>Background</h2>
                    <img className="backgroundImg" src={images[1]} alt= "img"></img>
                    <p>{background}</p>
                </section>

                <section className="infoSection">
                    <h2>History</h2>
                    <p>{history}</p>
                </section>

                <section className="infoSection">
                    <h2>Geography</h2>
                    <div className="geoImgDiv">
                        <img className="geoImg" src={images[2]} alt= "img"></img>
                        <img className="geoImg" src={images[3]} alt= "img"></img>
                        <img className="geoImg" src={images[4]} alt= "img"></img>
                    </div>
                    <p>{geography}</p>
                </section>

                <section className="infoSection">
                    <h2>Exploration</h2>
                    <img className="expImg" src={images[5]} alt= "img"></img>
                    <p>{exploration}</p>
                </section>
                
                </div> 
        </>
    )
}