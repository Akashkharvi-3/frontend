import React from "react";
class Classprop extends React.Component{
    render(){
        let k="kundapur"
        return(
            <div>
        <h1> hello this is class function {this.props.name}</h1>
        {this.props.children}
        my place:{k}
        </div>)
    }

}
export default Classprop