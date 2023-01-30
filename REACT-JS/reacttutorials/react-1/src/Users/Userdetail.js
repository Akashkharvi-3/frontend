import React from 'react'

const Userdetail = (props) => {
  return (
    <div>
      
     {/*  <h3>{JSON.stringify(props)}</h3> */}
      <div className='container mt-6'>
      <h1>user details</h1>
        <div className='row'>
          <div className='col'>
          <div className='card'>
          <div className='card-body'>
            <ul className='list-group'>
              <li className='list-group-item'>Email: {props.selectedUser.email}</li>
              <li className='list-group-item'>City: {props.selectedUser.address.city}</li>

            </ul>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdetail
