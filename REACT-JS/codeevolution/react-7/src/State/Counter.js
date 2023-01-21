import React from 'react';


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            count:0
        }}
    incr=()=>{
        this.setState({
            count:this.state.count+5
        },()=>{
            console.log('clback value',this.state.count)
        })
            console.log(this.state.count)}
       
    
    render(){
        return(
            
                <div>
                    <h1>count : {this.state.count}</h1>
                <button onClick={this.incr}>click</button>
                </div>
              
            

        )
    }}
    
       
    export default Counter

    


