import React, { Component } from 'react'
class Comp extends Component {
    state={
        msg:30000,
        v:0
            
    }
    Hand=(a)=>{
        this.setState({msg:30000+a})
        console.log("incremnet",a)
    }
  render() {
    return (
      <div>
        <h1>initial salary:{this.state.msg}</h1>
        <button onClick={this.Hand.bind(this,50000)}>hike 50k</button>
        <button onClick={this.Hand.bind(this,1000000)}>hike 10k</button>
   <button onClick={()=>{this.setState({msg:0},console.log("increment",this.state.v))}}>hike 0</button>
      </div>
    )       
  }
}

export default Comp
