//action types

const Gm="Gm"
const Gn="Gn"
let gmAction=()=>{
console.log("gmActn")
return {type:Gn}
}
let gnAction=()=>{
    console.log("gmActn")
    return {type:Gm}
    
}

export {gmAction,gnAction,Gm,Gn} 