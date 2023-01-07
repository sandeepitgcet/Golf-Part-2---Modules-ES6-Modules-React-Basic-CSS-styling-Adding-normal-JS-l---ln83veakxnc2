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
  
  function useKey(key, cb){
    const callBackRef = useCallback(cb);
    useEffect(()=>{
      callBackRef.current = cb;
    })
    useEffect(()=>{
      function handle(event){
        if(event.code === key){
          callBackRef.current(event); 
        }
      }
      document.addEventListener("keydown",handle);

      return (()=> document.removeEventListener("keydown",handleKey));
    },[key])
  }
  useEffect(()=>{
    console.log("hii"+x+" "+y);
    let pos = {...ballPosition};
    pos.left= x+"px";
    pos.top = y+"px";
    setBallPosition(pos);
  },[x,y])
  
  const reset = () => {
    setRenderBall(renderBall => !renderBall)
  };
  const startGame = () => {
    console.log("Game is started");
    setRenderBall(renderBall => !renderBall)
    //document.addEventListener("keydown", handleKey);
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
            <button onClick={reset} className="reset">Reset</button>
          </>
        )
      }
  };
  function handleRight(){
    console.log("RIght is handled");
    if(!renderBall){
      setX(x => x+5);
      console.log("ball moved")
    }
    
  }
  function handleLeft(){
    console.log("Left is handled");
    if(!renderBall){
       setX(x=> (x-5))
    }
   
  }
  function handleUp(){
    console.log("Up is handled");
    if(!renderBall)
    setY(y => (y-5));
  }
  function handleDown(){
    console.log("Down is handled");
    if(!renderBall)
    setY(y => (y+5))
  }
  useKey("ArrowRight", handleRight)
  useKey("ArrowLeft",handleLeft)
  useKey("ArrowUp", handleUp)
  useKey("ArrowDown",handleDown)

  return (
    <div className="playground">
      {renderChoice() }
    </div>
  );
};

export default App;
