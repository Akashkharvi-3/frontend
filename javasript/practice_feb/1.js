/* let arr=function(){
    console.log("i am anonyfunction")
}
arr() */

//use of IIFE?
//:- in tradtional function if u create variable within function it aceess in global object
//id u define IIFE it is    accessiable only directly within function
/* (function fn(){
    console.log("iam iife")
})()
 */

//fat arrow function

/* let fn=(num)=>{
    return num*num
}
console.log(fn(10)) */
/* 
let fn=num=>num*num
console.log(fn(5)) */

function sayhello(param)
{
    console.log("first",param)
    param()
    return "new return"
}
function smaller(){
    console.log("small fun")

}
let ab=sayhello(smaller)
console.log(ab)