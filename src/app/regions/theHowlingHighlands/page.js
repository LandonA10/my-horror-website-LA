import React from "react";
import NavBar from "@/app/navbar";
import RegionInfo from "../regionComp";
export default function HowlingHighlands(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["../characters", "../regions", ""];

    return (
        <>
            
            
            <div className="body">
                <NavBar linkNames={linkNames} sources={sources} />
                <RegionInfo name={"The Howling Highlands"} backImage={""} image={""} paragraph={""} />
            </div>
        </>
    );
}