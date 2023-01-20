import Props from './Props/Props'
import Classprop from './Props/Classprop'
let App=()=>{
    return(
        <div>
        <Props name="akash" place="kundapur"/>
        <button>click</button>
        <Props name="kharvi" place="udupi">
            this is child elemnt
        </Props>
        <Classprop name="vigu" place="koni"/>
        
        </div>
    )
}
export default App