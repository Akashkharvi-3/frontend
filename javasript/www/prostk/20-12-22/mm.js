class Account {
    constructor(id, name, msg) {
        console.log("Account - class Const")
        this.acc_Id = id;
        this.acc_Name = name
        this.message = msg
    }
    get_AccName() {
        return this.acc_Name
    }
}
class Current_Account extends Account {
    constructor(id, name, amount) {
        super(id, "aa", "GN")
        this.amount = amount
    }

}
let c1 = new Current_Account(102, "Priyanka", 600000)
let name=c1.get_AccName()

console.log(c1)
console.log(name)
