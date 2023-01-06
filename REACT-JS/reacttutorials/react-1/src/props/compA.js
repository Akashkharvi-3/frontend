import React from 'react'
import CompB from './compB'
let CompA=()=>{
    return <div>
        <h1> component A</h1>
        <hr />
        <CompB one={"gm"}/>
    </div>

}
export default CompA