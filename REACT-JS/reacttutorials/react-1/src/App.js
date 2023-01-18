import React,{Component} from "react";


import Navbar from "./Navbar/Navbar";
import Message from "./HookEx/Message";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";import Counter from "./HookEx/Counter";


class App extends Component {
render(){
  return(<div>
    <Router>
      <Navbar/>
    
      <Switch>
<Route path="/usestate" component={Message}/>
<Route path="/counter" component={Counter}/>
</Switch>


    </Router>
  </div>)
  
}
}
export default App   