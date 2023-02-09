import {combineReducers} from 'redux'
import { messageReducer } from './redux/message/message.reducer'
let rootReducer=combineReducers({message:messageReducer}) 
export {rootReducer }