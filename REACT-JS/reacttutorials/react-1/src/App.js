import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Users/Home'
import UsersApp from './Users/UsersApp' 
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
       <Navbar/>
 <Switch> 
     
      
   <Route path="/home" component={Home}/>
   <Route path="/users" component={UsersApp}/>
   
   </Switch> 
   </Router>
  
    </div>
  )
}

export default App
