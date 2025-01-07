import React from "react";
// import "../styles.css";
import NavBar from "../navbar";
import "./characters.css"
export default function Characters(){
    const linkNames = ["Regions", "Lore", "Background"];
    const sources = ["", "", ""];
    return (
        <>
            <div className="navBarDiv">
                <NavBar linkNames={linkNames} sources={sources} />
            </div>
            <div className="characterWebpage">
            <span className="region"><h1 className="regionH1">Region Name</h1></span>
            <section className="info">
                <div className="regionBack">
                    <h2 className="backgroundH2">Region Background</h2>
                    <div className="regionBackParaDiv">
                    <p className="regionBackParagraph">Welcome too [] a place of many horrors...</p>
                    </div>
                </div>

                <section className="characterSect">
                    <h1 className="regionH1">Characters</h1>
                    <div className="character">
                        {/* will have image of character in background */}
                        <div className="characterInfo"> 
                            <h3 className="characterName">Character</h3>
                            <h4 className="characterNickName">The Character</h4>
                        </div>
                        <div className="characterStory">
                            <h3 className="characterName">Story</h3>
                            <div className="regionBackParaDiv">
                            <p className="regionBackParagraph">Long ago...</p>
                            </div>
                        </div>
                        <div className="survivalGuide">
                            <h3 className="characterName">Survival Guide</h3>
                            <div className="regionBackParaDiv">
                            <p className="regionBackParagraph">RUN!!!!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            </div>
        </>
    )
}