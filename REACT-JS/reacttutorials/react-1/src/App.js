/* import React, { useEffect, useState } from "react";

let Digital = () => {
  let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // component did mount
    let timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      // componentWillUnmount
      clearInterval(timer);
    };
  });

  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <div className="card text-center">
              <div className="card-header bg-success text-white">
                <p className="h4">Digital Watch - Functional</p>
              </div>
              <div className="card-body">
                <h3 className="display-3">{currentTime}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Digital; */


import React,{useState,useEffect} from "react";
const App=()=>{
  let [currentTime,setCurrentTime]=useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    let time=setInterval(()=>{
      setCurrentTime(new Date().toLocaleTimeString())

    },1000)
    return()=>{
      clearInterval(time)
    }
 })


return(
  <div className="container">
  <div className="row">
  <div className="col">
    <div className="card text-center">
  <div className="card-header bg-dark text-white">
    <p className="h4">Digital watch function</p>
  </div>
    <div className="card-body">
      <div className="h3">{currentTime}</div>
     
    </div>
  </div>
  </div>
  </div>
  </div>
)}




export default App