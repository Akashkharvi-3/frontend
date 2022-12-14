class Account
{
    min_bal=500
    constructor(name,id,amount)
    {
        this.acc_name=name
        this.acc_id=id
        this.acc_bal=amount
    }
        openac()
        {
            console.log("sucuessfully")
        }
deposit(amount)
{
    this.acc_bal=this.acc_bal+amount
}
drw()
{
    return this.acc_bal-this.min_bal
}
}

let c1=new Account("akash",101,1500)
let c2=new Account("kharvi",102,1000)
console.log(c1)
console.log(c2)
c1.deposit(10)
c2.deposit(10)
console.log("after deposit")
console.log(c1)
console.log(c2)
console.log("my bal")
console.log(c1.drw())
console.log(c2.drw())
