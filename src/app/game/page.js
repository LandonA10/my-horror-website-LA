
import dynamic from "next/dynamic";

const PixiClient = dynamic(() => import("./PixiClient"), {ssr:false});

export default function Game(){
  return (
    <>
      <h1>Hello</h1>
     <PixiClient />
    </>
  )
}

//download pixi and react bundles