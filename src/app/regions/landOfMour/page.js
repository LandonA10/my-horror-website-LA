import React from "react";
import NavBar from "@/app/navbar";

export default function LandOfMour(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "./regions", ""];

    return (
        <>
            <div className="body">
            <NavBar linkNames={linkNames} sources={sources} />
            <h1>Hello</h1>
            
            </div>
        </>
    );
}