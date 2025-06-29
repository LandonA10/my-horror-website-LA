import React from "react";
import NavBar from "@/app/navbar";
import RegionInfo from "../regionComp";
export default function HowlingHighlands(){

    const linkNames = ["Characters", "Regions", "Background"];
        const sources = ["../characters", "../regions", ""];
        const imgArr = [" ", " "," "," "," "," ",];
    
        return (
            <>
                <div className="body">
                    <NavBar linkNames={linkNames} sources={sources} />
                    <RegionInfo name={"The Howling Highlands"} images = {imgArr}
                        background={"Welcome to the Howling Highlands, a place of many airborne monsters called Angels. These monsters enjoy preying on humans and hunt them frequently. While the monsters aren’t particularly strong, they are extremely mobile and are very fast. Besides the Angels, the Howling Highlands is the second largest region consisting of many hills, mountains, and cliffs. It’s home to 1 million people, and there are 3 major tribes that live amongst the mountains and hills."}
                        history={"In the early age, people from the Land of Mour migrated to the howling highlands. As civilization grew, the people started to split into 3 different tribes and eventually the 3 tribes all went their own separate ways, claiming different parts of the hills and mountains. As of currently, these tribes are on fair terms with each other, while not wanting to become one nation, they do want to be allies. Together the tribes work together to fend off outside forces, while maintaining their own societies. While known to be as dangerous as Horrors, there is no connection between them and Angels. The Angels are believed to be the original people of the mountains, however due to a certain event long before the humans from The Land of Mour came, the people of the mountains “fell” from grace. Whether it had been some sort of natural phenomenon or a type of evolution, the Angels became flesh hungry beasts, seeking out humans to eat."}
                        geography={"The Howling Highlands is filled with large, tall ominous mountains. Out of all the mountains there are 3 that are larger than the rest. The 3 tribes of the Highlands occupy their own mountain, making it their home. However, there are some mountains where the Angels rest and lay. These mountains are known as the Range of Hell, and despite the fiery name, the mountains are filled with snow. Temperatures on these mountains can reach to -200 F, and altitudes of 200+ feet. While these mountains aren’t as high as the Big 3 Peaks, they are much more dangerous and are a lot rougher and scarier. Due to the high altitudes of the Highlands, a majority of the day is cloudy and gray, except for 1 hour. At exactly 1 pm, the clouds and everything fades away, as if it had never existed before, and following it is a gorgeous view of the sky. The tribes call this time Peace Time, as during this hour there are no Angels flying around. The reasons for this phenomenon are unknown."}
                        exploration={"When exploring the highlands make sure to follow a path that has been properly constructed by the tribes. Angels are active all throughout the day, the best way to avoid them is to travel in large groups as Angels tend to prey on those who are alone or in small groups. When visiting it is best to stay in one of the tribe's cities as they are protected, and tour with an official guide group from the tribes. Make sure to steer far from the Range of Hell, and be sure to carry a weapon at all times. Angels tend to dislike warmth and fire, so having some sort of explosive or fire will be extremely beneficial just in case. The best mountains to explore are the Big 3 Peaks, as they contain many adventurous forests, lakes and other natural wonders."}
                        />
                    </div>
            </>
        );
}