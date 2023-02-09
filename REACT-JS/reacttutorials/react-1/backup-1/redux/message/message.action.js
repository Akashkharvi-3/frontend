const Gm="Gm"
const Gn="Gm"

let gmAction=()=>{
console.log("gm actn")
return {type:Gm}
}
let gnAction=()=>{
   console.log("gn actn") 
   return {Gm}
}
export {gmAction,gnAction,Gm,Gn}