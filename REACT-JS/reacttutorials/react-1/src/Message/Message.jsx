import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
/* 2 */import { gmAction,gnAction } from '../redux/message/message.action'

const Message = () => {
    let dispatch=useDispatch()
    let message=useSelector((state)=>{
return state.message
    })


    let gmHand=()=>{
        dispatch(gmAction())  /* 3 */

    }
    let gnHand=()=>{
        dispatch(gnAction())

    }
    return(
        <div>
      <pre>{JSON.stringify(message)}</pre>
      <h1>message:{message.message}</h1>
        <button onClick={gmHand}>gm</button>
        <button onClick={gnHand}>gn</button>

      
    </div>
  )
}

export default Message
