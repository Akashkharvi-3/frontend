let time=1
let x=setInterval(()=>{
  
    if(time>10){
        clearInterval(x)
    }
    console.log("gm")
    time++
},1000)