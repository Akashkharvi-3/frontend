/* function  add(a,b)
{
    console.log(a)
    console.log(b)

}
add("hai","bye","hoi")
 */

/* function emp_details(id,name,salary)
{
    console.log(id)
    console.log(name)
    console.log(salary+5000)
}
emp_details(101,"akash",60000)
emp_details(102,"vignu",50000) */

/* function add(a,b)
{
    return a*b;
    
}
var res=add(10,20)
console.log(res) */

/* function wish(a)
{
    return "hello " + a
}
let hi = wish("gudmrng ")
console.log(hi)

 */

function inner()
{
    console.log("inner")
function outer()
{
    console.log("outer")
}
outer()
outer()
}
inner()

