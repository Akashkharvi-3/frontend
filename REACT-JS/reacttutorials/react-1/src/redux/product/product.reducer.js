import {INCR,DECR} from './product.action'
let initialstate={
    name:"Apple",
    image:"https://cdn1.smartprix.com/rx-ilvBvRaPO-w1200-h1200/lvBvRaPO.jpg",
    price:11000,
    qty:1
}

let productReducer=(state=initialstate,action)=>{
    console.log(action.type)
    switch(action.type){
        case INCR:
            return{...state,qty:state.qty+1}
                case DECR:
            return{...state,qty:state.qty-1}
            default: return state
            }
            
    }

 export {productReducer}