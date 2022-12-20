let evennumber=(n)=>{
    return n%2==0
}

let evennum = (even,num)=>{
    let evenu=even(num)
    console.log(`the  num  ${num} is ${evenu} `)
}
evennum(evennumber,16)