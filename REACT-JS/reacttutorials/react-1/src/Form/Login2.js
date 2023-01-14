import React from "react";
class Login2 extends React.Component{
    state={
        email:"",
        password:""

    }

    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        alert(JSON.stringify(this.state))
    }
/*     emailHandler=(event)=>{
        console.log(event.target.value)
        this.setState({email:event.target.value})
     } */
  /*    passwordHandler=(event)=>{
        console.log(event.target.value)
        this.setState({password:event.target.value} }*/
     
     submitHandler=(event)=>{
        event.preventDefault();
alert(JSON.stringify(this.state))
     }

    render(){
        return(
            <div className="container" mt-5>
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-md-5">
                    <div className="card-header">
              <form onSubmit={this.submitHandler}>
                 
              <div className="form-group">
                            <input type="text" className="form-control" name="email" placeHolder="Email id" onChange={this.updateHandler}/>
                        </div> 
                        <div className="form-group">
                            <input type="text" className="form-control" name="password" placeHolder="password" onChange={this.updateHandler}/>
                        </div> 
                        <div className="form-group">
                            <input type="submit" className="btn btn-success"></input>
                        </div> 
              </form>
                    </div>

                    </div>
                </div>

            </div>
        )
    }}
    export default Login2