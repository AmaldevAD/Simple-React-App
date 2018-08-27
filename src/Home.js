import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link,Redirect} from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';

export default class Home extends Component{
render(){
    return(
        <div style={{textAlign:"center",color:"white"}} >
        <h1 style={{color:"white",fontFamily:"Ariel Black"}}>WELCOME TO OUR COMMUNITY</h1>
        <br/>
        <br/>
        <br/>
        
        <img src="https://c8.alamy.com/comp/H2N4J4/push-and-pull-signs-with-man-icon-pushing-or-pulling-green-and-red-H2N4J4.jpg" style={{height:'50vh',width:"50vh"}} />
        
        <div>
            <h3>"You can save you thoughts here"</h3>
        </div>
        <br/>
        <br/>
    
        <Link to="/Sign">
        <RaisedButton label="SIGNUP" secondary  />
         </Link>
         <br/>
                    <br/>
                    <Link to="/login">
                    <FlatButton label=" user? Login" primary />
                    <br/>
                    <br/>
                    </Link>
            







        </div>








    )




}


}