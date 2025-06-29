import React from "react";
import NavBar from "@/app/navbar";
import RegionInfo from "../regionComp"; 
export default function FallenIsles(){

    const linkNames = ["Characters", "Regions", "Background"];
    const sources = ["../characters", "../regions", ""];
    const imgArr = [" ", " "," "," "," "," ",];

    return (
        <>
            <div className="body">
                <NavBar linkNames={linkNames} sources={sources} />
                <RegionInfo name={"The Fallen Isles"} images = {imgArr}
                    background={"The Isles are a group of islands off the coast of Mytharelm. These islands formed millions of years ago and are home to special aquatic creatures called Leviathans. These monsters tend to live deep underwater, and will from time to time come up to the surface. These creatures tend to be uninterested in human activity, however since the awakening of the Horror’s, these creatures have started to be seen more often on the surface, and have even started to interact with humans. The intentions of the creatures are still unknown, however, people of the island become more fearful as the days continue to pass. The Isles has the least amount of people, containing a population of 500,000."}
                    history={"The people of this island have long originated on it. Unlike Mour, back in the “early age” the islands were all separate kingdoms, however over time they have come together to create one large nation. The people of the islands have cultivated a rich culture in agriculture, religion, and fishing. While the people don’t necessarily fear the Leviathans, they revere them as godly creatures, meant to be unbothered. The people of the islands tend to stay isolated as they believe nothing good will come from venturing to the mainland, and rarely do they interact with it."}
                    geography={"Each island exhibits its own unique features. The head island contains a tropical forest that contains a plethora of different plants and animals. The second island contains a large peak (an ancient volcano that has lost its spark), and contains a plethora of unique materials. The 3rd island is a large flatland, good for agriculture and growing many types of crops. It’s the main export of food for all the islands. The 4th island contains a large salt water lake in the middle of it, in that lake there propers many different types of fish and other sea creatures that are only found in that lake. And lastly, the 5th island is the smallest but is home to the military force of the entire nation. It is the one island that has been completely transformed for human use, and it trains some of the most elite soldiers to ever exist. The water around the islands contains a very large coral reef system which provides the sea a plethora of beautiful colors and sea creatures."}
                    exploration={"While the islands are most isolated, they do allow tourism for certain islands, mainly the 5th and 3rd. The islands are actually the safest place on Mytharelm as the monsters are not actively going out to hunt humans, however do still stay alert and try and avoid any leviathans you may encounter. Make sure to abide any laws that the islands have, as most likely, they are there for your own safety."}
                    />
                </div>
        </>
    );
}