import React from "react"
class Comp extends React.Component{
    state={
        msg:"hi"
    }
    gmHand=(m)=>{
this.setState({msg:m})
    }

    render(){
        return(
            <div>
                <h1>wish message:{this.state.msg}</h1>
                <button onClick={this.gmHand.bind(this,"Good morning")}>gm</button>
                <button onClick={this.gmHand.bind(this,"Good night")}>gn</button>
                <button onClick={()=>{
                    this.setState({msg:"good night sweet dreams"})
                }}>sd</button>
            </div>
        )
    }

}
export default Comp