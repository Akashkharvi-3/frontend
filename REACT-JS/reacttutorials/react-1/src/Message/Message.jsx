import React from 'react'
import { gmAction,gnAction} from '../redux/meesage/message.action'
import {useDispatch,useSelector} from 'react-redux'

const Message = () => {
    let dispatch=useDispatch()
  
    let message=useSelector((state)=>{
        return state.message

    })

    let gmHandler=()=>{
        dispatch(gmAction())
        //dispatch an action
    }
    let gnHandler=()=>{
        dispatch(gnAction())
        //dispatch an action
    }
  return (
    <div>
        <pre>{JSON.stringify(message)}</pre>
     <h1>message:{message.message}</h1>
     <h1>Merssage codd</h1> 
     <button onclick={gmHandler}>GM</button>
     <button onClick={gnHandler}>GN</button>
    </div>
  )
}

export default Message
