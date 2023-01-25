import {GM,GN} from './message.action'
let initialState={
    msg:"Hello"
}
let messageReducer=(state,action)=>{
    console.log(action)
    console.log(action.type)
    switch(action.type){
        case GM:
        return {message:"good morning"}
        case GN:
        return {message:"goodt night"}
    default:
        return state
    }


}
export {messageReducer}

//reducer is a pure functio it will 2 argment 1.state 2.action
//?? reducer is going update store based on Actio type sometime we click or gn