let time = 1

let x = setInterval(() => {
    
 
    if(time>10)
    {
       
        clearInterval(x)
    }
    console.log("GM")
    time++
}, 1000)  