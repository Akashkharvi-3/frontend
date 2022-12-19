 class A{
    m1()
    {
        console.log("this is class A m1()")
    }

}
class B extends A{
    m1()
    {
        super.m1()
        console.log("this is class B m1()")
    }
    m2()
    {
        console.log("this is class B m2()")
    }}

let c1=new B()
c1.m1()
c1.m2() 


