import React from "react";
import "./regionComp.css";

export default function RegionInfo({name, backImage, image, paragraph}){
    return (
        <>
           <div className="webPageDiv">
                <div className="headingImageDiv">
                    <h1 className="regionHeaderH1">{name}</h1>
                    <img src={backImage} alt="regionBackground" />
                </div>
                <section className="infoSect">
                    <div className="infoDiv">
                        <div className="imgDiv">
                            <img className="paraImg" src={image} alt="Land Of Mour"/>"
                        </div>
                        <div className="imgPara">
                            <p>{paragraph}</p>
                        </div>
                    </div>
                    </section>
                </div> 
        </>
    )
}