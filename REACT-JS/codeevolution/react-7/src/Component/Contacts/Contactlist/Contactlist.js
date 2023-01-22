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
                <p className='h3'> Contact Manager <Link to={'/contacts/add'} className="btn btn-primary" > 
            <i className='fa fa-plus-circle me-4'/> New </Link></p>
            </div>
            <p className='fst-italic'>lorem hia jjsf kfj kijhad iojfnm mlorem hia jjsf kfj kijhad iolorem hia jjsf kfj kijhad iolorem hia jjsf kfj kijhad io   kmnad kamdkd ojdowd jijmhai i  fromtyenfd de </p>
        </div>
    </div>
    <div className='row'>
        <div className='col-md-6'>
            <form className="row">
                <div className='col'>
            <div className='mb-2'>
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
</> )
}

export default Contactlist
