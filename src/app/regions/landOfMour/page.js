import React from "react";
import NavBar from "@/app/navbar";
import RegionInfo from "../regionComp";
export default function LandOfMour(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["../characters", "../regions", ""];

    return (
        <>
            
            
            <div className="body">
                <NavBar linkNames={linkNames} sources={sources} />
                <RegionInfo name={"Land of Mour"} backImage={""} image={""} paragraph={"Welcome too the Land of Mour a place to many ancient monsters called Horrors. You will see that these Horrors feast off the emotions of humans, making them extremely strong, and hard to combat against. Surviving against these creatures is extremely difficult to do, and rarely does any person make it out alive after encountering one. Besides the Horrors, The Land of Mourn is home to many large forests, mountains, and lakes. Out of the 4 main regions, it is the largest and most populated, containing 5 major cities and home to about 2 million people."} />
            </div>
        </>
    );
}