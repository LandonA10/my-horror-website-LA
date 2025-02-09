import React, { useEffect } from "react";
import * as PIXI from "pixi.js";


export default function CharacterGame() {
    const gameContainer = useRef(null);
    
    
    useEffect( () =>
    {
        

        const app = new PIXI.Application({
            background:"#1099bb",
            resizeTo:window,
        });

        if (gameContainer.current) {
            gameContainer.current.appendChild(app.view);
        };

        PIXI.Assets.load("https://pixijs.com/assets/bunny.png").then((texture) =>{
            const character = new PIXI.Sprite(texture);
            character.anchor.set(0.5);
            character.x = app.screen.width / 2;
            character.y = app.screen.height / 2;

            app.ticker.add(() =>{
                character.y  += Math.sin(app.ticker.lastTime * 0.01) * 0.5;
            });

            app.stage.addChild(character());
        });
    }
    )
}