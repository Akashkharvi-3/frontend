let sum=(a,b)=>{return a+b}
let mul=(a,b)=>{return a*b}
let total=(a,b,c)=>{
    return c(a,b)
}
let r1=total(10,30,sum)
let r2=total(10,30,mul)
console.log(r1)
console.log(r2)
let r3=total(40,30,(a,b)=>{return a-b})
console.log(r3)