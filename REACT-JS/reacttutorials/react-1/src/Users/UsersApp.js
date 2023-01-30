
import React,{useEffect,useState} from 'react'

import Axios from 'axios'

import Userlist from './Userlist'
import Userdetail from './Userdetail'

const UsersApp = () => {
  let [users,setUsers]=useState({})
  let [selectedUser,setselUsers]=useState({})
 
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        setUsers(response.data)
       /*  console.log(response.dats) */  

      }).catch((err)=>{
             console.log(err)
      })
    
    }, [])
    let selectUserHand=(a)=>{
      setselUsers(a)

    } //dummy method
    return (
   <div className='container'>
<div className='row'>

<h1>user app</h1>

<pre>{JSON.stringify(users)}</pre>
 
    <div className='col-md-8'>
      {
        
        Object.keys(users).length>0?<>
        
        <Userlist users={users} selectedUser={selectUserHand} />
        </>:null
      }
         </div>
      <div className='col-md-4'>{
      Object.keys(selectedUser).length>0?<>
        
         <Userdetail selectedUser={selectedUser}  />
        </>:null
      }
       

   

    </div>


  
</div>
   </div>)
}

export default UsersApp
