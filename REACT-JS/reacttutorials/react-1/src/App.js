import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './Product/Product'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
 
class App extends React.Component{
  render(){
    return (
    <div>
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/product" component={Product}/>
       
        
      </Switch>

      </Router>
       
    </div>)
  }
}
export default App