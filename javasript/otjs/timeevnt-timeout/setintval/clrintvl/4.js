let calc= (a,b,operation)=>{
    if(operation=="sum")
    {
        return a+b
    }
    if(operation=="mul")
    {
        return a*b
    }

}
let c1=calc(10,2000,"sum")
let c2=calc(10,200,"mul")
console.log(c1)
console.log(c2)