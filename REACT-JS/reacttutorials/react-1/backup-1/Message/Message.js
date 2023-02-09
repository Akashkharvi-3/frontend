import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { gmAction,gnAction } from '../redux/message/message.action'

const Message = () => {
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
      return state.message
    })
  
    let gmHand=()=>{
        dispatch(gmAction)

    }
    let gnHand=()=>{
        dispatch(gnAction)
        
    }
  return (
    <div>
      <h1>Message:{message.message}</h1>
      

        <button onClick={gmHand}>GM</button>
        <button onClick={gnHand}>GN</button>
     
    </div>
  )
}

export default Message
