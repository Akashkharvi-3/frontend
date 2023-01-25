import { rootReducer } from "./rootreducer";
import {createstore} from 'redux'
import {composeWithDevtools} from 'redux-devtools-extension'
let store=createStore(rootReducer,composeWithDevtools() );
export {store}