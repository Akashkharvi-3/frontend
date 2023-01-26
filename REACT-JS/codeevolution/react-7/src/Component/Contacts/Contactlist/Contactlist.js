import React from 'react'

import {Link} from 'react-router-dom'

const Contactlist = () => {
  return (
<>
<section className="container search" p-5>
  <div className='container'>
    <div className='grid'>  
        <div className='row'>
            <div className='col'>
                <p className='h3 fw-bold'> Contact Manager <Link to={'/contacts/add'} className="btn btn-primary" > 
            <i className='fa fa-plus-circle me-4'/> New </Link></p>
            </div>
            <p className='fst-italic'>lorem hia jjsf kfj kijhad iojfnm mlorem hia jjsf kfj kijhad iolorem hia jjsf kfj kijhad iolorem hia jjsf kfj kijhad io   kmnad kamdkd ojdowd jijmhai i  fromtyenfd de </p>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-6'>
            <form className="row">
                <div className='col'>
            <div className='mb-'>
            <input type="text" className='form-control' placeholder='Search names '/>
   </div>
   </div>
   <div className='col'>
            <div className='mb-2'>
           
            <input type="submit" className='btn btn-outline-dark' value='Search'/>
            </div>
            </div>
            </form> 
            </div>
            </div>
        </div>
        
 
</section>
<selection className="contact-list">
    <div className='container'>
        <div className="row">
            <div className='col-md-6'>
                <div className='card'>
              
                    <div className='card-body'>
                    <div className="row align-item-center " >
                        <div className='col-md-4'>
                        <img src="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png" height="150px" width="150px" alt=""></img>
                        </div>
                      <div className='row'></div>
                        <div className='col-md-7'>
                           <ul className='list-group'>
                            <li className='list-group-item list-group-item-action'>
                                name:<span className='fw-bold'>Akash</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                Phone:<span className='fw-bold'>4554555545</span>
                                </li>
                                <li className='list-group-item list-group-item-action'>
                                email:<span className='fw-bold'>akash@13.com</span>
                                </li>
                                </ul> 
                        
                        </div>
                        <div className="col-md-1 d-flex-flex-column align-item-center">
                            <Link to={`/contacts/add`}className='btn btn-warning my-1'>
                            <i className='fa fa-eye'/>
                            
                            </Link>
                            <Link to={`/contacts/contactid`}className='btn btn-primary my-1'>
                            <i className='fa fa-pen'/>
                            
                            </Link>
                            <button className='btn btn-danger my-1'>
                            <i className='fa fa-trash'/></button>
                            
                           
                        </div>
                        </div>
                    
                  
                        </div>
                    </div>
                </div>

            </div>
      

    </div>
</selection>
</> )
}

export default Contactlist
