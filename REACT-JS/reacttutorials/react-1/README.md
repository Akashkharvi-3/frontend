import React from "react";
class Comp extends React.Component{
    state={msg:"good morning"}
    Hand=()=>{
        /* this.msg="very good morning"
        console.log(this.msg)
        this.forceUpdate() */

        this.setState({msg:"very good"})
    }
    secHand=()=>{
        /* this.msg="very good morning"
        console.log(this.msg)
        this.forceUpdate() */

        this.setState({msg:"very good aft"})
    }

    render(){
        return(
            <div>
                <h1>message:{this.state.msg}</h1>
                <button onClick={this.Hand}>CLick</button>
                <button onClick={this.secHand}>GN</button>
            </div>
        )
    }

}
export default Comp