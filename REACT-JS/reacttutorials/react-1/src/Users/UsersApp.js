
import React,{useEffect,useState} from 'react'

import Axios from 'axios'

import Userlist from './Userlist'
import Userdetail from './Userdetail'

const UsersApp = () => {
  let [users,setUsers]=useState({})
 
    useEffect(() => {
      Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
        setUsers(response.data)
       /*  console.log(response.dats) */

      }).catch((err)=>{
             console.log(err)
      })
    
    }, [])
    return (
   <div className='container'>
<div className='row'>

<h1>user app</h1>

<pre>{JSON.stringify(users)}</pre>
 
    <div className='col-md-8'>
      {
        
        Object.keys(users).length>0?<>
        
        <Userlist users={users}/>
        </>:null
      }
         </div>
      <div className='col-md-4'>
        <Userdetail/>

   

    </div>


  
</div>
   </div>)
}

export default UsersApp
