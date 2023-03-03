import React,{useState} from 'react'


function App(){
    const [circles,setCircles]=useState([])
    const addcircle=()=>{
        const newCircle=<div style={{
           
            width:'150px',
        height:'150px',borderRadius:'50%',
        
        
        background:'red',
        margin:'11px',
    }}></div>
        setCircles([...circles,newCircle])
    }
    return(
        <>
        <button onClick={addcircle}>Add circle</button>
        {
            circles.map((circle,index)=><div key={index}>
            {circle}</div>)}</>)
        }
 export default App