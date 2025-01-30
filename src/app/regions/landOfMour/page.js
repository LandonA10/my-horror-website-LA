import React from "react";
import NavBar from "@/app/navbar";
import "./landOfMour.css";
export default function LandOfMour(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["../characters", "../regions", ""];

    return (
        <>
            
            
            <div className="body">
                <NavBar linkNames={linkNames} sources={sources} />
                <div className="webPageDiv">
                    <div className="headingImageDiv">
                        <h1 className="regionHeaderH1">The Land Of Mour</h1>
                    </div>

                    <section className="infoSect">

                        <div className="infoDiv">
                            <div className="imgDiv">
                                <img className="paraImg" src="" alt="Land Of Mour"/>"
                            </div>
                            <div className="imgPara">
                                <p>Paragaph here</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}