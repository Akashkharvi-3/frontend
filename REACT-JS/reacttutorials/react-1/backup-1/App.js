import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import {store} from './redux/store'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'

 
class App extends React.Component{
  render(){
    return (
    <div>
      <Provider store={store}>
      <Router>
      <Navbar/>
        <Switch>
        <Route path="/redux" component={Message}/>
       
        
      </Switch>

      </Router>
      </Provider>
    </div>)
  }
}
export default App