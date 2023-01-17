import React,{Component} from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import ContactApp from "./ContactApp/ContactApp";
import Index from "./Home/Index";
class App extends Component {
render(){
  return(<div>
    <Router>
      <Navbar/>
      <Switch>
<Route path="/contact" component={ContactApp}/>
<Route path="/index" component={Index}/>
</Switch>


    </Router>
  </div>)
  
}
}
export default App   