console.log("before")
console.log("after")

function getuser(id,call){
    setTimeout((function user(){
        console.log("hai welcome")
        call({userid:102,name:"akash"})
    }),2000)
}
getuser(1,function(usr){
    console.log(usr)
})
