import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Users/Home'
import Users from './Users/Users' 
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Router>
       <Navbar/>
 <Switch> 
     
      
   <Route path="/home" component={Home}/>
   <Route path="/users" component={Users}/>
   
   </Switch> 
   </Router>
  
    </div>
  )
}

export default App
