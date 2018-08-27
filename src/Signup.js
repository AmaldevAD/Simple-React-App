import React, { Component } from 'react';
import {Card, CardTitle} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import {db,Auth} from './config'
import {Link,Redirect} from 'react-router-dom'
import { white } from 'material-ui/styles/colors';
import Snackbar from 'material-ui/Snackbar';
import ContentAdd from 'material-ui/svg-icons/content/add';
export default class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            pass:'',
            dob:'',
            open:false,
            
            
        }
    }
   

    onEmail(e,s){
        this.setState({email:s})
        console.log("email",s);
    }

    onPass(e,s){
        this.setState({pass:s})
    }
    onDob(e,s){
        this.setState({dob:s})
        

    }

        onSubmit(){


            var that = this
            Auth.createUserWithEmailAndPassword(this.state.email,this.state.pass).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
              }).then(
              function(data){
              that.setState({open:true})
          }
        )
       
        
    
        

    }

  

    render(){


        return(
            <div>
                <Card style={{backgroundColor:"white", margin:'auto',width:'25%',textAlign:'center'}}>
                <br/>
                    <br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZalrlEP1_Y-p8osEYK2ppHQl0qWThw0Id24lIES0L3X3kJFTEQ"  />
                    <br/>
                    <CardTitle title="SignUp" style={{color:"white"}}/>
                    <br/>
                    <TextField floatingLabelText="Email" onChange={this.onEmail.bind(this)}/>
                    <br/>
                    <TextField floatingLabelText="Password" type="password" onChange={this.onPass.bind(this)}/>
                    <br/>
                    <br/>
                    <DatePicker hintText="D.O.B" onChange={this.onDob.bind(this)} />
                    <br/>
                    <br/>
                    <RaisedButton label="submit" primary onClick={this.onSubmit.bind(this)}   />
                    <br/>
                    <br/>
                    <Link to="/login">
                    <FlatButton label=" user? Login" primary />
                    <br/>
                    <br/>
                    </Link>



                </Card>
                <Snackbar open={this.state.open} message="User created"  autoHideDuration={4000}/>

                <div style={{color:white,textAlign:"center"}}>
                     <br/>
                    <br/>
                    
                    <Link to="/">
                    
                    <RaisedButton label="Home" secondary />
                    <br/>
                    <br/>
                    </Link>

                </div>


            </div>



        )


    }
    
}