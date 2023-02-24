import React, { Component } from 'react'

class Login extends Component {
    state={
        email:"",
        password:"",
    
    }
    update=(event)=>
    {
       this.setState({[event.target.name]:event.target.value})
    }
    submitHand=(event)=>{
     
    event.preventDefault()
    console.log(this.state)
    
    }
    
  render() {
    return (
      <div>
        <div className='container mt-5'>
        <pre>{JSON.stringify(this.state)}</pre>
            <div className='row'>

                <div className='col'>
                    <div className='card'>
                        <div className='card-header'>
                            <form onSubmit={this.submitHand}>
                            <div className="form-group">
                            <input type="text" className='form-link' placeholder='email' name="email" onChange={this.update}/>
                            <div className="form-group"><br/>
                            <input type="text" className='form-link' placeholder='password' name="password" onChange={this.update}/>
                            <div className="form-group"><br/>
                                <input type="submit" placeholder='Submit' value="login" className='btn btn-danger'></input>
                            
                          
                           
                        
                            </div>
                            </div>
                        </div>
                        </form>
                        </div>
                    </div>

                </div>
            </div>

         </div>
      </div>
    )
  }
}

export default Login

