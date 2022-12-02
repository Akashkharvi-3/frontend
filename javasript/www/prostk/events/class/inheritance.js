class parentclass{
    constructor(){
    console.log("print parentconsrtrctr")
    }
    getaddress()
    {
        console.log("getadress methgfof")
    }
}
class childclass extends parentclass{
    constructor()
    {
    super()
     console.log("sub contsrectirt")
    }
}
let c1 = new childclass()
c1.getaddress()