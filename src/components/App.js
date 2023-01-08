import React, { useState, useEffect, useKey, useCallback} from "react";
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

  const handleKey = (event) => {
    //console.log(event.key);
    if(event.keyCode === 39){ //RIght
        setX(x+5)
    }else if(event.keyCode === 38){ //Up
      setY(y-5)
    }else if(event.keyCode === 37){ //Left
      setX(x-5);
    }else if(event.keyCode === 40){ //Down
      setY(y+5)
    }
  }
  
  
  useEffect(()=>{
    window.addEventListener('keydown', handleKey);
    console.log("hii"+x+" "+y);
    let pos = {...ballPosition};
    pos.left= x+"px";
    pos.top = y+"px";
    setBallPosition(pos);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  },[x,y])
  
  const reset = () => {
    setX(x => 0);
    setY(y => 0);
    setRenderBall(renderBall => !renderBall)
  };

  
  const startGame = () => {
    console.log("Game is started");
    setRenderBall(renderBall => !renderBall)
    document.addEventListener("keydown", handleKey);
  }
  
  
  const renderChoice = () => {
      if(!renderBall){
        return (
          <button className="start" onClick={startGame}>Start</button>
        )
      }else{
        return (
          <>
            <div style={ballPosition} className="ball"></div>
            
          </>
        )
      }
  };
  
  return (
    <div className="playground">
      <button onClick={reset} className="reset">Reset</button>
      {renderChoice() }
    </div>
  );
};

export default App;
