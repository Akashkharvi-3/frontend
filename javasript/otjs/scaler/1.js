//square of that number is even or not

//imperative

/* const a=5
const asquared=a*a
let iseven                  //imperative
if(asquared%2==0){
    iseven=true
}
    else{
        iseven=false
    }

console.log(iseven) */

//declarative

const checksquare  = (x) =>(x*x%2==0 ? true :false)
console.log(checksquare(4))                             //declrative