import React from "react";
import CompB from "./CompB";
class CompA extends React.Component{
    emp="aku"
    id=1
    
    render(){
        return(
            <div>
                <h1>Comp a component</h1>
                
                <hr/>
                <CompB one={"Gm"} two={"Gn"}/>

                
            </div>
        )
    }
    
}
export default CompA