
let goToMovie = (success, failure) => {
    let amount = 200;
    if (amount >= 700) {
        success("Go To Movie with POP Corn")
    }
    else {
        failure("Go To PG, Bring Laptop and practice")
    }

}

/* goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.error(err)
}) */

goToMovie((msg)=>{
    console.log(msg)
},(err)=>{
    console.log(err)
})

