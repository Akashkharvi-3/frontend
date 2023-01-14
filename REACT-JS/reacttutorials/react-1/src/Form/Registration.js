import React from "react";
class Registartion extends React.Component{
state={
    username:"",
    email:"",
    password:"",
    mob_no:"",
}
updateHandler=(event)=>{
    this.setState({[event.target.name]:event.target.value})
}
submitHandler=(event)=>{
    event.preventDefault()
    alert(JSON.stringify(this.state))
}
render(){
    return(
    <div className="container mt-5">
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                                <input type="text" name="username" placeHolder="usertname" className="form-control" onChange={this.updateHandler}/>
                         </div>
                            <div className="form-group">
                                <input type="text" name="email" placeHolder="email" className="form-control" onChange={this.updateHandler}/>
                         </div>
                         <div className="form-group">
                                <input type="text" name="password" placeHolder="password" className="form-control" onChange={this.updateHandler}/>

                            </div>
                            <div className="form-group">
                                <input type="text" name="mob_no" placeHolder="mobile" className="form-control" onChange={this.updateHandler}/>

                            </div>
                                        <div className="form-group">
                                <input type="submit"  className="btn btn-primary" onChange={this.submitHandler}/>

                            </div>
                      </form>
                  </div>
                </div>
            </div>
        </div>
        </div>)
}



}
export default Registartion