let myobj={name:"akash",
age:25,
adress:{
    place:"kundapur",
    dist:"udupi"
   
}
}
/* 
let{name,age,adress}=myobj
console.log(name)
console.log(age)
console.log(adress)

 */
let{name,age,adress:{place}}=myobj
console.log(name)
console.log(age)
console.log(place)