import {Gm,Gn} from './message.action'
let initialstate={
    message:"hello"
}
let messageReducer=(state=initialstate,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type)
    {
        case Gm:
          return  {message:"good morning"}
          case Gn:
            return  {message:"good night"}
            default:
                return state
    }
}
export {messageReducer}

