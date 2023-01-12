

import React,{Component} from 'react'
class Binding extends Component{
    state={
        msg:"hello"
    }
    msgHandler=(m)=>{
        this.setState({msg:m})
    }
    render(){
        return(
            <div>
                <h2>wish message:{this.state.msg}</h2>
                <button onClick={this.msgHandler.bind(this,"good morning")}>GM</button>
                <button onClick={this.msgHandler.bind(this,"good afternoon")}>GA</button>
                <button onClick={this.msgHandler.bind(this,"good night")}>GN</button>
            </div>)
    }
}

export default Binding

/*  import React,{Component} from 'react'
class Binding extends Component{
    state={
        msg:"hello"
    }
    msgHandler=(m)=>{
        this.setState({msg:m})
    }
    render(){
        return(
        <div>
            <h2> wish Message:{this.state.msg}</h2>
            <button onClick={this.msgHandler.bind(this,"gm")}>GM</button>
                  <button onClick={this.msgHandler.bind(this,"ga")}>GA</button>
                  <button onClick={this.msgHandler.bind(this,"gn")}>GN</button>
                        </div>)
    }
}
export default Binding 

 */
