import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { incrAction ,decrAction} from '../redux/product/product.action'

const Product = () => {
    let dispatch=useDispatch()
    let product=useSelector((state)=>
    {
    return state.product
    }
    )
  
    let incHandler=()=>{
        dispatch(incrAction())

    }
    let decHandler=()=>{
        dispatch(decrAction()) 
    }
  return (
    <div className='container mt-5'>
         <div className='row'>
         <div className='col-md-6'>
            <table className='table table-hover'>
                <thead className='bg-dark text-white'>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>total</th>
                    </tr>
                    </thead>
                <tbody>
                    {
                        <tr>
                        <td>{product.name}</td>
                        <td><img src={product.image} alt="" height="150px"/></td>
                        <td>{product.price}</td>
                        <td><i className='fa fa-minus-circle' onClick={decHandler}></i>{product.qty}<i className='fa fa-plus-circle' onClick={incHandler}></i></td>
                        <td>{product.qty*product.price}</td>


                    </tr>
                        
                        
                       
                    }

              
                </tbody>
                  


            </table>

         </div>
         </div>
    </div>
  )
}

export default Product
