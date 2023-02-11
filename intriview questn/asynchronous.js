/* function first(){
    console.log(1)
}
function second(callback){
    setTimeout(()=>{
        console.log(2)
        callback()
    },1000)
   
}

function third(){
    console.log(3)
}
first()
second(third) */
 
function getuser(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(a)
            {
                resolve("scuess jsj")
            }
            else{
                reject("fail")
            }
        },1000)

    })

}
getuser(true).then((response)=>{
    console.log(response)
}).catch((failure)=>{
    console.log(failure)
})