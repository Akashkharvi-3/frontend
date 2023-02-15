
import {Gm,Gn} from './message.action'
let initialstate={
    message:"hello"
}
let Messagereducer=(state=initialstate,action)=>{
    console.log(action.type)
    switch(action.type){
        case Gm:
            return {message:"good morning"}

            case Gn:
                return {message:"good niight"}
   default:
    return state
            }


}
export {Messagereducer}
