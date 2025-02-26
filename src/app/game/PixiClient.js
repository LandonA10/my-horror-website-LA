"use client";

import { Stage,Graphics, Sprite, Container,  } from "@pixi/react";
import React, {useCallback, useState, useRef, useEffect} from "react";
import * as PIXI from "pixi.js";

export default function PixiClient(){

    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({x:400, y:400});

    const draggingRef = useRef(false);
    const offsetRef = useRef({x:0, y:0});
    const screenWidth = 800;
    const screenHeight = 600;
    const spriteWidthSize = 100;
    const spriteHeightSize = 64;

    const onDragStart = (event) => {
        draggingRef.current = true;
        const sprite = event.currentTarget;
        const {x, y} = event.data.global;

        offsetRef.current = {x: x - sprite.x, y:y-sprite.y};
    }
    const onDragMove = (event) => {
        if (!draggingRef.current) return;
        const { x, y } = event.data.global;
        let newX = x - offsetRef.current.x;
        let newY = y - offsetRef.current.y;
    
        // 🛑 Clamp the position to stay inside the screen
        newX = Math.max(98, Math.min(screenWidth - spriteWidthSize, newX));
        newY = Math.max(65, Math.min(screenHeight - spriteHeightSize, newY));
        // console.log("newX:" , newX);
        console.log("newY:" , newY);
        
        // Update position based on mouse movement
        setPosition({ x: newX, y: newY });      
    };
    
      const onDragEnd = () => {
        draggingRef.current = false;
      };
    
    
    return (
        <>
            <Stage width={800} height={600} options={{background: 0x1099bb }}>
                <Sprite 
                    image={"./cubeR.png"}
                    x={position.x}
                    y={position.y}
                    anchor={0.5}
                    width={200}
                    height={200}
                    interactive={true}
                    cursor="grab"
                    pointerdown={onDragStart} // Start dragging
                    pointermove={onDragMove} // Move sprite
                    pointerup={onDragEnd} // Stop dragging
                    pointerupoutside={onDragEnd}
                />
            </Stage>
        </>
    )
}