let car=function(model,price){
    this.model=model,
    this.price=price
}
car.prototype.getmodel=function(){
    return this.model

}

let newcar=new car("omni","m45414")
console.log(newcar)
console.log(newcar.getmodel())

/* output:
car { model: 'omni', price: 'm45414' }
omni
 */



/* const obj={name:"akash",getName:function(){
return this.name
}}
console.log(obj)

const obj2={rol:"aku",
__proto__:obj
}
console.log(obj2.getName()) */

/* output: { name: 'akash', getName: [Function: getName] }
akash
 */
    