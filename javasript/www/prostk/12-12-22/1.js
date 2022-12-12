class account{
    min_bal=500
    acc_bal=0
    get_deposit(amount){
this.acc_bal=this.acc_bal+amount

    }
    get_withdraw()
    {
        return this.acc_bal-this.min_bal
    }

}
let c1=new account()
let c2=new account()
c1.get_deposit(15000)
c2.get_deposit(25000)

console.log(c1)
console.log(c2)

console.log(`after draq then  my balance`)
let d1=c1.get_withdraw()

let d2=c2.get_withdraw()
console.log(d1)
console.log(d2)
