
let sum= (a,b)=>{return a+b}
let mul= (a,b)=>{return a*b}

let total=(a,b,c)=>{
    return c(a,b)
}
let c1= total(10,20,sum)
let c2= total(10,2,mul)
console.log(c1)
console.log(c2)