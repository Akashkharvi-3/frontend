
import React, { useState } from "react";
 const Message =()=>{
    let message="hai"
    let [variable,raji]=useState("hiii"); 
    let gmHand=(()=>{
        raji("gm hand")
    })
    let gnHand=(()=>{
        raji("gnhand")
    })
    return(
        <div>
            <h1>wish1 messsage:{variable}</h1>
            <h1>wish messsage:{message}</h1>
            <button onClick={gmHand}>GM</button>
            <button onClick={gnHand}>GN</button>
            
        </div>
    )
} 
export default Message




