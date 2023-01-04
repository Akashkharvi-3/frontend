import React from "react";
import  ReactDOM  from "react-dom";

function Greeting(){
 return <h2>welcome my first component </h2>
 /* return React.createElement("h2",{},"hi") */
}

ReactDOM.render(<Greeting />,
document.getElementById('root'));
