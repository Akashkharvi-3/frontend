/* var size=[];
console.log(size.length)

var ab = size.push(38)
console.log(size)
console.log(ab)

var ab = size.pop(38)

console.log(size)
console.log(ab) */

var ids = {id:101,
    name:"akash",
    salary:125000}
/* for(k in ids)
{
  console.log(ids)
}
 
console.log(Object.values(ids))*/

var emp = {id:101,name:"akash",sal:180000}

if(Object.keys(emp).length==0)
{
    console.log("empty array")
}
else
{
    console.log("not empty")
}