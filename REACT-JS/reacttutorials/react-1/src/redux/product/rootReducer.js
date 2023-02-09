import { combineReducers } from "redux";
import { productReducer } from "./product.reducer.js";

let rootReducer=combineReducers({product:productReducer})
export {rootReducer}