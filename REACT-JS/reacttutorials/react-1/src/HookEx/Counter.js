
import React,{useState} from "react";

const Counter = () => {
    let [product,setProduct]=useState({
        prod_name:"Redmi 10A",
        image:"https://m.media-amazon.com/images/I/71293gyogZL._SX425_.jpg",
        price:49132,
        qty:1
    } )
    let incHandler=()=>{
        setProduct({...product,qty:product.qty+1})

    }
    let decHandler=()=>{
        setProduct({...product,qty:product.qty-1})  
    }
    return(
      <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
               
                <table className=" table table-hover">
                <thead className="bg-dark text-white">
                   
                        <tr>
                        <th>Productname  </th>
                        <th>Image   </th>
                        <th>Price</th>
                        <th>QTY</th>
                        <th>total</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            
                                <td>{product.prod_name}</td>
                                <td><img src={product.image} height="100px" width="100px" alt=""></img></td>
                                <td>{product.price}</td>
                                <td><img src="https://img.icons8.com/ios-glyphs/30/null/macos-maximize.png"  alt="" onClick={incHandler}/>{product.qty}<img src="https://img.icons8.com/material-sharp/24/null/minus-sign.png" alt="" onClick={decHandler}/></td>
                                <td>{product.qty*product.price}</td>
                            
                        </tr>
                    </tbody>
                </table>
               
            </div>
        </div>
      </div>
    )

}
export default Counter