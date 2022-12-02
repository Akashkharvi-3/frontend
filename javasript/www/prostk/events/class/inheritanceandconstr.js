class parentclass
{
    constructor(id,name)
    {
console.log("print parentsclass")
this.name=name;
this.id=id;
    }
    
}
class childclass extends parentclass
{
    constructor(id,name,amount){
        super(name,id)
        console.log("childclass")
        this.amount=500
 }
}
var c1 = new childclass(101,"akash",400)
console.log(c1) 