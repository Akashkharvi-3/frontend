/* let cars = [{ model: "XUV500", Brand: "Mahindra", price: 1500000, color: "White" },
{ model: "BlackBird", Brand: "Tata", price: 1900000, color: "Red" },
{ model: "x5", Brand: "BMW", price: 7500000, color: "Blue" },
{ model: "Swift", Brand: "Maruthi", price: 800000, color: "Rose" },
{ model: "Safari", Brand: "Tata", price: 1800000, color: "White" },
{ model: "Rapid", Brand: "Skoda", price: 1300000, color: "Gray" },
{
    model: "POLO", Brand: "VW", price: 900000, color: "White"
},
{ model: "Tiago", Brand: "Tata", price: 400000, color: "White" },
{ model: "Scorpio N", Brand: "Mahindra", price: 2500000, color: "White" },
{ model: "X1", Brand: "BMW", price: 3500000, color: "Black" },
{ model: "Nexon", Brand: "Tata", price: 1500000, color: "White" }]
let new_Cars = []

for (car of cars) {
    if (car.color === "Black") {
        //console.log(car)
        //new_Cars.push("GM")
        new_Cars.push(car)
    }
}
console.log(new_Cars) */



/* let enames = ["Rahul", "Sonia", "Priyanka", "Modi"]
//create new Employee Names in form of - Capital Case 


let new_Enames = enames.forEach((ename) => {
    return ename.toUpperCase()
})
console.log(enames)
console.log(new_Enames) */

let marks = [35, 36, 37, 38, 39, 40]
//create new array
let a = []

let i = 0;
while (i <= marks.length - 1) {
    a.push(marks[i])
    i++
}
console.log(a)
marks[marks.length - 1] = 41
console.log(marks)




