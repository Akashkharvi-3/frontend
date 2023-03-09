import React, { Component } from 'react'

 class Loginform extends Component {
  state={
    username:"",
    password:"",
    mobile:"",
    address:""

  }

    emailHand=(event)=>{
   this.setState({username:event.target.value})

    }
    passwordHand=(event)=>{
      this.setState({password:event.target.value})
       }
       mobHand=(event)=>{
        this.setState({mobile:event.target.value})
         }
         addressHand=(event)=>{
          this.setState({address:event.target.value})
           }
  submitHandler=(event)=>{
event.preventDefault()

console.log(this.state)
/* if(this.username==="")
{
  console.log("value should b")
} */
alert("successfully Login")
  }

  render() {
    return (

      <>
      <pre>{JSON.stringify(this.state)}</pre>
      <form onSubmit={this.submitHandler}>
      <div className='mt-5 ml-3'>
      <div classname="container">
      <div className='row'>
      <div className='col-md-4'>
      <div className='card'>
      <div className='card-header'>
       <div className='mt-5 ml-4' >
        <label htmlFor="">Username:   </label>
        <input type="text" name="uname" onChange={this.emailHand} required/><br/><br/>
        <label htmlFor="">Password: </label>
        <input type="password" name="password" onChange={this.passwordHand} /><br/><br/>
        <label htmlFor="">Mobile: </label>
        <input type="text" name="mobile" onChange={this.mobHand} /><br/><br/>
        <label htmlFor="">Address: </label>
    
        <input type="text" name="address" onChange={this.addressHand} /><br/><br/>
        <input type="submit" value="Login" className='mr-5 btn btn-success' />
        </div>  
        </div>
        </div>  
        </div>
        </div>
        </div>
      </div>
      </form>
      </>
    )
  }
}


export default Loginform
