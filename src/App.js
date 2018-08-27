import React, { Component } from 'react';
import './App.css';
import  AppBar  from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import {Link, BrowserRouter,Switch, Route} from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Notice from './Notice'






class App extends Component {
  render() 
  {
    return (
      <div>
      
    <AppBar title="pushNpull"
     style={{height:80,}}
     
    />
     <BrowserRouter>


          <Switch>
          <Route path="/notice" component={Notice}/>
          <Route path="/sign" component={Signup}/>
          <Route path="/login" component={Login}/>
         <Route path="/" component={Home}/>

           </Switch>

      </BrowserRouter>
  
 
   </div>


  
    );
  }
}

export default App;
