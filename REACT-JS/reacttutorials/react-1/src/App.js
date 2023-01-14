import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Dummy/Home'
import About from './Dummy/About'
import Contact from './Dummy/Contact'

import Navbar from './Navbar/Navbar';
/* import Login2 from './Form/Login2'; */
/* import Registartion from './Form/Registration'; */

/* import Login from './Form/Login'; */
/* import Clock from '../../react-2/Lifecycle_clock/Clock'; */
/* import Employees from './Data/Employees' */

/* import Binding from './Binding/Binding';
import Binding2 from './Binding/Binding2';
 */


/* import Product from './Product/Product' */


let App=()=> {
    return <div>

  <Router>
  <Navbar/>
  <Switch>
    <Route path="/Home" component={Home}/>
     <Route path="/About" component={About}/>
     <Route path="/Contact" component={Contact}/>
  </Switch>
  </Router>
        
{/*         <Registartion/> */}
        {/* <Login2/> */}
       {/*  <Login/> */}
      {/*   <Employees/> */}
      {/*    <Clock/> */}
       {/*  <Binding/>
        <Binding2/> */}
      {/*   <Counter/> */}
      {/*   <Product/> */}
      
 
    </div>

}
export default App