class employee{
    
    constructor(id,name)
    {
        this.id=id
        this.name=name
}
get_address()
{

    console.log("print vale",this.name,this.id)
}
}
var c1 = new employee(101,"rahul")
var c2 = new employee(102,"sonia")
 c1.get_address()
c2.get_address()
 
