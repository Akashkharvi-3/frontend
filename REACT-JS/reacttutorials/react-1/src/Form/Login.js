import React from "react";
class Login extends React.Component{
    state={
        email:"",
        password:""
     }
     emailHandler=(event)=>{
        console.log(event.target.value)
        this.setState({email:event.target.value})
     }
     passwordHandler=(event)=>{
    /*     console.log(event.target.value) */
        this.setState({password:event.target.value})
     }
     submitHandler=(event)=>{
        event.preventDefault();

     }

     render(){
        return <div>
        <h1>Login page</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
        <label>email</label>
        <input type="text" onChange={this.emailHandler}/><br/>
        <label>password</label>
        <input type="text" onChange={this.passwordHandler}/><br/>
        <input type="submit" value="login"/>
        </form>
        </div>
        
     }
}
export default Login