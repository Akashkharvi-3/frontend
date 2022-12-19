
class parent
{
constructor(id,name,msg){
    this.id=id
    this.name=name
    this.msg=msg
}
}
class child extends parent{
    constructor(id,name,msg,amount)
    {
        super(id,name,msg)
        this.amount=amount
    }}
class otherchild extends parent{
    constructor(id,name,msg,amount){
        super(id,name,"gn")
        this.amount=amount
    }
}


let c1=new child(101,"Akash","gm",500000)
console.log(c1)
let c2=new otherchild(102,"kharvi","gnn",40000)
console.log(c2)