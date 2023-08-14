import React from "react";
import "./style.css";
import{useState, useEffect} from "react";


const url="https://api.adviceslip.com/advice";

export default function App() {
  const[advice, setAdvice] = useState("once bitten twice shy")

  const getAdvice= async()=>{
    const res = await fetch(url);
     const data = await res.json();
     console.log(data.slip.advice)
     setAdvice(data.slip.advice);
  }

  useEffect(()=>{
    getAdvice();
  },[])
  
  return (
    <div>
      <div className="wrapper">
      <h3>Advice generator </h3>

      <p>{advice}</p>
      </div>
      <button className="btn" onClick={getAdvice}>generate</button>
    </div>
  );
}
