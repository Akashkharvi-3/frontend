function show(...args){
let sum=0;
for(let a of args){
 sum=sum+a
}
console.log("the total sum is",sum)
}
show(10,20,10,20,)