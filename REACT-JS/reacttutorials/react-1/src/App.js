import React,{Component} from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Message from "./HookEx/Message";
/* import Index from "./Home/Index"; */
class App extends Component {
render(){
  return(<div>
    <Router>
      <Navbar/>
      <Switch>
<Route path="/usestate" component={Message}/>

</Switch>


    </Router>
  </div>)
  
}
}
export default App   