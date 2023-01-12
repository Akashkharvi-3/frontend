import React  from "react";
class Binding2 extends React.Component{
    state={
        emp_sal:30000
    };
    btnHandler(value){
        console.log("reading button data",value)
        this.setState({emp_sal:30000+value})
    }
    render(){
        return(
            <>
            <h2>employee:salary{this.state.emp_sal}</h2>
            <button onClick={this.btnHandler.bind(this,0)}>hike 0</button>
    <button onClick={this.btnHandler.bind(this,50000)}>hike 50k</button>
    <button onClick={this.btnHandler.bind(this,100000)}>hike 100k</button>
                    
            </>
        )
    }

}
export default Binding2