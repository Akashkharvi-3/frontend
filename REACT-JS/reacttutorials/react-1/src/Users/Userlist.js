import React from 'react'


const Userlist = (props) => {
  let selectHandler=(user)=>{
    console.log(user)
    props.selectedUser(user)

  }
  return (
    <div>
        <h1>user list</h1>
       <pre>{JSON.stringify(props.users)}</pre>
       <div className='row'>
        <div className='col'>
          <table className='table hover'>
            <thead className='bg-dark text-primary'>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>

              </tr>
            </thead>
            <tbody>
              {
                props.users.map((user)=>{
                  return <tr key={user.id} onClick={selectHandler.bind(this,user)}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
       </div>
    </div>
  )
}

export default Userlist
