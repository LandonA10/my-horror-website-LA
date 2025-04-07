
import React from "react";
import NavBar from "../navbar";
import "./characters.css";
export default function Characters(){
    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["./characters", "./regions", ""];
    return (
        <>
        <div className="body">
            <NavBar linkNames={linkNames} sources={sources} />
            <div className="characterWebpage">
            <section className="info">
                <h1 className="regionH1">Land of Mour</h1>
                <div className="regionBack">
                    <h2 className="backgroundH2 characterName">Region Background</h2>
                    <div className="regionBackParaDiv">
                    <p className="regionBackParagraph">Welcome too the Land of Mour a place to many ancient monsters called Horrors. 
                        You will see that these Horrors feast off the emotions of humans, making them extremely strong, and hard to 
                        combat against. Surviving against these creatures is extremely <b><i>difficult</i></b> to do, and rarely does any 
                        person make it out alive after encountering one. Besides the Horrors, The Land of Mourn is home to many large forests, 
                        mountains, and lakes. Out of the 4 main regions, it is the largest and most populated, containing 5 major cities and home 
                        to about 2 million people. <RegionLink regionLink={"./regions/landOfMour"} regionName={"Learn more here..."} /></p>
                    </div>
                </div>

                <section className="characterSect">
                    <h1 className="regionH1">Characters</h1>
                    <div className="character">
                        {/* will have image of character in background */}
                        <div className="characterInfo"> 
                            <h3 className="characterName name">The Adon</h3>
                            <h4 className="characterNickName">The First Fear </h4>
                        </div>
                        <div className="characterStory">
                            <h3 className="characterName">Story</h3>
                            <div className="regionBackParaDiv">
                            <p className="regionBackParagraph">Long ago at the beginning of time the first consiousness came to life. Along with it came all the emotions we feel today, one of those being <i>fear</i>. The feeling of fear was so prominent in all beings that it started to manifest into its own being, the <i>Adon</i>. The Adon feasts on the fear of all things consious, as long as fear exists, the Adon will never die. It is the strongest horror, and the most fearsome one.</p>
                            </div>
                        </div>
                        <div className="survivalGuide">
                            <h3 className="characterName">Survival Guide</h3>
                            <div className="regionBackParaDiv">
                            <p className="regionBackParagraph">To be realistic, if you encounter this Horror, your chance of survival is less than 1%. However, if you were truly determined to stay alive, here is the guide to try and survive. First off, the Adon likes to stay in places with little light, as the dark is where fear is most prominent. When traveling through the forests of Mourn, try to avoid extremely dark areas where even the sun ceases to reach. If by unlucky fate, you were to encouter this Horror, keep calm and try to relax yourself. The more scared you are, the stronger the Adon gets. It is physically and mentally impossible to not be atleast a little scared of the Adon, so it is crucial to reduce your fear as much as possible. Slowly, back up until you reach an area of light. Once you feel the sun or some sort of light on your back, run. Run. Run, and don't look back, maybe then it would spare your life.</p>
                            </div>
                        </div>
                        <div className="charImagesDiv"> 
                            <ImageFigure name={"The Adon"} src={"/adonImg.jpg"} />
                            <ImageFigure name={"Adon Hunting its Prey"} src={"/adonHumanImg.jpg"} />
                            {/* <ImageFigure name={"The Adon"} src={""} /> */}
                        </div>
                    </div>
                </section>
            </section>
            </div>
            </div>
        </>
    )
}

function RegionLink({regionName, regionLink}){

    return (
        <>
            <a className="regionLink" href = {regionLink}>{regionName}</a>
        </>
    )
}

function ImageFigure({name, src}){

    return (
        <>
            <figure className="charImageFig">
                <img className="charImage" src={src} alt={name} />
                <figcaption>{name}</figcaption>
            </figure>
        </>
    )
}
