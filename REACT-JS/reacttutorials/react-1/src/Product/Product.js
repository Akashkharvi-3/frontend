import React,{Component} from 'react'

class Product extends Component{
    state={
        product_name:"Infinix HOT 20 Play",
        image:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70",
        price:8199,
        qty:1

    }
    render(){
        return <div>
            <div ClassName="container mt-6">
            <div ClassName="row">
            <div ClassName="col-md-6">
            <table ClassName="table table-hover">
            <thead ClassName="bg-info">
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>   
                <th>Qty</th>        
                <th>total Price</th>  
                </thead> 
                <tbody>
                    <tr>
                        <td>{this.state.product_name}</td>
                        <td>{<img src={this.state.image} height="200px" alt=""/>}</td>
                        <td>{this.state.qty}</td>
                        <td>{this.state.qty*this.state.price}</td>
                    </tr>

                </tbody>
                </table>
                </div>
                </div>          
                </div>    
                </div>
               
                     
    }
}
export default Product