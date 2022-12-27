console.log("before")
console.log("after")

function getuser(id,cl){
    setTimeout((function(){
        console.log("gm")
        cl({id:101,name:"akash"})
        
    }),2000)
}

function getrepo(names,cllbk){
    setTimeout((function(){
        cllbk(["rep1","rep2"])
      console.log(`name of the username ${names}`)
    }),2000)
}

getuser(1,function(us){     //let a=getsuser(1)
console.log(us)
getrepo(us.name,function(prn){                      //let b=getsuser(us.name)
console.log(prn)
})
})
