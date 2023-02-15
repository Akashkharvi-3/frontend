import { combineReducers } from "redux";
import { Messagereducer } from "../redux/message/message.reducer";
let Rootreducer=combineReducers({message:Messagereducer})
export{Rootreducer}