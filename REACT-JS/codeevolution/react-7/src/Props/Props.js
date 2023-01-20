import React from 'react'
let Props=(props)=>{
   
   
        console.log(props)
        return(
            <div>
        <h1>hello {props.name} and place {props.place} </h1>
        {props.children}
       
        </div>
        )
    }

export default Props