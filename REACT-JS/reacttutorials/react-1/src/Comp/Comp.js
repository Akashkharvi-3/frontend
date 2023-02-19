import React from "react";
class Comp extends React.Component{
    state={
        product:{
            name:"redmi 8",
            image:"data:image/jpeg;base64,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",
            price:8000,
            qty:1
        }

    }
    handler=()=>{
        this.setState({product:{
            
           ...this.state.product,qty:this.state.product.qty-1}})
          
   
        }
        minushandler=()=>{
        this.setState({product:{
           ...this.state.product,qty:this.state.product.qty+1}})
   
        }
    


    render(){
        return(
            
            <div className="container mt-5">
                <div className="row">
                    <pre>{JSON.stringify(this.state)}</pre>
                    <div className="col">
                        <table className="table table-hover">
                            <thead className="bg-dark text-white">
                                <tr>
                                    <th>name</th>
                                       <th>image</th>
                                            <th>price</th>
                                                <th>qty</th>
                                                      <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                  <tr>
                              
                                  
                                        <td>{this.state.product.name}</td>
                                       
                                            <td><img src={this.state.product.image} height="100px" width="100px" alt=""></img></td>
                                             <td>{this.state.product.price}</td>
                                                        <td><i className="fa fa-circle-minus" onClick={this.handler}></i>{this.state.product.qty}<i className="fa fa-circle-plus" onClick={this.minushandler}></i></td>
                                                               <td>{this.state.product.qty*this.state.product.price}</td>
                                
                                 </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}
export default Comp