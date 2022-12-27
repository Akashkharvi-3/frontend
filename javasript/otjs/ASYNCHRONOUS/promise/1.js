/* 
JUST FOR PROMISE

const p=new Promise(function(resolve,reject){
  //  resolve(1)
  reject("error")
})
p.then(function(res){
    console.log(res)
}).catch(function(err)
{
    console.log(err)
}) */

 function getsuser(id){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve({userid:101,name:"akash"})
        }, 2000);
    })
}

getsuser(1).then(function(usr){
    console.log(usr)
}) 



