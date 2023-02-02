import React,{useState} from "react";
let msg="vasu"
let App=()=>{
let[abc,seabc]=useState("jai shree ram")
let akash=()=>{
  seabc("bbabaguhakna");

}
return(
  <div>
     <h1>messag display:{msg}</h1>
    <h1>messag:{abc}</h1>
    <button onClick={akash}>Click</button>

  </div>
)
}
export default App