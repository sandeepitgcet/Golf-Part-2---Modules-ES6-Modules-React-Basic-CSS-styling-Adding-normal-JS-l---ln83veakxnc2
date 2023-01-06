import React, { Component, useState, KeyboardEvent} from "react";
//import { ids } from "webpack";
import "../styles/App.css";

const App = () => {
  
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  // const keyDownEvent = (event: React.KeyboardEvent<HTMLDivElement>) => {
  //   console.log(event.code);
  //   if (event.code === "ArrowRight") {
  //     setLeft(() => left + 15);
  //   }
  //   if (event.code === "ArrowLeft") {
  //     setLeft(() => left - 15);
  //   }
  //   if (event.code === "ArrowDown") {
  //     setTop(() => top + 15);
  //   }
  //   if (event.code === "ArrowUp") {
  //     setTop(() => top - 15);
  //   }
  // };
  const reset = () => {
    setRenderBall(renderBall => !renderBall)
  };
  const startGame = () => {
    console.log("Game is started");
    setRenderBall(renderBall => !renderBall)
    //document.addEventListener("keydown", handleKey);
  }
  
  const handleKey = (event) => {
    console.log("Hii"+event.key);
    // let pos = {...ballPosition};
    // if(event.keyCode==39){ // Right
    //   console.log("RIght");
    //     pos.left= (x+5)+"px";
    //     setX(x => x+5);
    // }else if(event.keyCode == 40){//down
    //   console.log("Down");
    //   pos.top= (y+5)+"px";
    //   setY(y => y+5)
    // }else if( event.keyCode == 38){ //UP
      
    //   console.log("UP");
    //   pos.top= (y-5)+"px";
    //   setY(y => y-5)
    // }else if(event.keyCode === 37){ // left
    //   console.log("Left");
    //   pos.left= (x-5)+"px";
    //   setX(x => x-5)
    // }
    // // pos.left= x+"px";
    // // pos.top = y+"px";
    // setBallPosition(pos);
  }
  const renderChoice = () => {
      if(!renderBall){
        return (
          <button className="reset" onClick={startGame}>Start</button>
        )
      }else{
        return (
          <div className="ball"></div>
        )
      }
  };
  console.log(ballPosition);
  return (
    <div className="playground" onKeyDown={handleKey}>
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice() }
    </div>
  );
};

export default App;
