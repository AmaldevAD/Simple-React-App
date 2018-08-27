import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Auth} from './config'
import FlatButton from 'material-ui/FlatButton';
import {Link,Redirect} from 'react-router-dom'

export default class Login extends Component{

    constructor(props){
        super(props)
        this.state = {
            email:'',
            pass:'',
            red:false
        }
    }

    onEmail(e,s){
        this.setState({email:s})
        console.log("email",s);
    }
    onPass(e,s){
        this.setState({pass:s})
    }

    onSubmit(){
          var that =this;

          Auth.signInWithEmailAndPassword(this.state.email,this.state.pass).catch(function(error){}).then(function(user){
          if(user){
              console.log("Success!")
              that.setState({red:true})
          }

          })

          

    }



    
    render(){
        return(
            <div>
                <Card style={{backgroundColor:"white", margin:'auto',width:'25%',textAlign:'center'}}>
                <br/>
                    <br/>
                    <img src="https://i2.wp.com/academy.leewayweb.com/wp-content/uploads/2017/04/sesiones.png?resize=254%2C255"  />
                    <br/>
                    <CardTitle title="Login"/>
                    <br/>
                    <TextField floatingLabelText="Email" onChange={this.onEmail.bind(this)}/>
                    <br/>
                    <TextField floatingLabelText="Password" type="password" onChange={this.onPass.bind(this)} />
                    <br/>
                    <br/>
                    <RaisedButton label="submit" primary onClick={this.onSubmit.bind(this)} />
                    <br/>
                    <br/>
                    <Link to="/sign">
                    <FlatButton label="Not a user? SignUp" primary />
                    <br/>
                    <br/>
                    </Link>
                </Card>
                <div style={{color:"white",textAlign:"center"}}>
                     <br/>
                    <br/>
                    
                    <Link to="/">
                    
                    <RaisedButton label="Home" secondary />
                    <br/>
                    <br/>
                    </Link>

                </div>

                {this.state.red?<Redirect to ="/notice"/>:null}
            </div>
        )
    }
}
