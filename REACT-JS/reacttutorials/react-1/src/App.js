import React from 'react'
import Navbar from './Navbar/Navbar'
import store from './redux/product/store';
import { Provider } from 'react-redux'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Product from './Product/Product'

 
class App extends React.Component{
  render(){
    return (
    <div>
  <Provider store={store}>
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/counter" component={Product}/>
       
        
      </Switch>

      </Router>
      </Provider>
  
    </div>)
  }
}
export default App