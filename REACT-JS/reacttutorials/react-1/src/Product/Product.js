import React,{useState} from "react";

let Product=()=>{
   let [produc,setproduc]=useState({
    p_name:"redmi",
    image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTAnqoSykIK0KT3nZe6tfIm9JevKYk2pQOEkpXHzuv06FokYtb6m_QvMZFj_iw&usqp=CAc",
    price:8000,
    qty:1
})

let decHandler=()=>{
 setproduc({...produc,qty:produc.qty-1})   
}
let incHandler=()=>{
    setproduc({...produc,qty:produc.qty+1})
    
    }
return(
    <div>
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>P_Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            </thead> 
                       
                        <tbody>
                            {
                            <tr>
                                <td>{produc.p_name}</td>
                                 <td><img src={produc.image} alt="" height="160px" width="100px"></img></td>
                                  <td>{produc.price}</td>
                                   <td><i className="fa fa-minus-circle" onClick={decHandler}></i>{produc.qty}<i className="fa fa-plus-circle" onClick={incHandler}></i></td>
                                   
                                    <td>{produc.qty*produc.price}</td>
                            </tr>
}   
                        </tbody>
                  
                        </table>

                </div>
            </div>
        </div>
    </div>
)

}
export default Product
