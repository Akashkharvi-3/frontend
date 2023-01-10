import React from 'react'
class Counter extends React.Component{
    state={
        qty:1
    }
    incHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    decHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return <div>
            <h1>Counter component</h1>
            <h2>qty:{this.state.qty}</h2>
            <button onClick={this.incHandler}>increment</button>
            <button onClick={this.decHandler}>decrement</button>
            </div>
    }
}
export default Counter