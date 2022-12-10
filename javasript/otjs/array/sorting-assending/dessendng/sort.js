var a =[50,10,30,20,70,]
var b=[70,10,20,40,80,60]
//a.concat(b)
a.push(100)
console.log(a)
console.log(b)
//var c=a.concat(b) conacatination
var c = a.sort(function(x,y)
{
    return x-y
})
var c = a.sort(function(x,y)
{
    return y-x
})
console.log(c)