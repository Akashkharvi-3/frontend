import React from 'react'
import CompB from './compB'
class CompA extends React.Component{
    eid=101;
    ename="Rahul Gandhi";
    render(){
        return <div>
            <h2>hai this is new mesage from compA</h2>
            <CompB one={"gm"} two={"gn"}/>
            <CompB id={this.eid} name={this.ename}/>

        </div>
    }
}
export default CompA