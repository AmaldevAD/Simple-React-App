import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Link,Redirect} from 'react-router-dom'
import TextField from 'material-ui/TextField'
import {db,Auth} from './config'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {List, ListItem} from 'material-ui/List';

export default class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
          first:'',
          last:'',
          open:false,
          list:[],
          uid:'',
          red:false,
        }
      }

      componentDidMount(){
          var that=this

          Auth.onAuthStateChanged(function(user){

           if(user){
               console.log("user",user.uid);
               that.setState({uid:user.uid})

               db.ref('notices').child(user.uid).on('value',function(data){
                var list = []
             data.forEach(function(child){
             list.push(child.val())
  
             })
             that.setState({list:list.reverse()})
            })
           }

          })




          
      }


      onFirst = (e,s) =>
      {
       this.setState({first:s})
      }


      onLast = (e,p) =>
      {
       this.setState({last:p})
      }

     onSub = () =>
     {

        var data={
            title: this.state.first,
            desc: this.state.last
        }
      db.ref('notices').child(this.state.uid).push().set(data)
         this.handleClose();
     }


     handleClose = () => {
        this.setState({open: false});
      };

      onAdd = () =>
      {
       this.setState({open: true});

      }
      onSignout = () =>
      {
       Auth.signOut
       this.setState({red:true})

      }


    render(){
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.onSub}
            />,
          ];

          const notices = []

          const list = this.state.list
        
          for (let i = 0; i < list.length; i++) {
              notices.push(
              
              <ListItem
              style={{color: "white", fontSize:22}}
               primaryText={list[i].title} 
               primaryTogglesNestedList={true}
                nestedItems={[<ListItem style={{color: "white", fontSize:22}} primaryText={list[i].desc}/>]}
                 />
              );
          }


        return(
            


            <div style={{textAlign:'center'}}>
                <h1 style={{color:"white"}}>Notice:</h1>
                <div style={{float:"right"}}>
                  
                  <RaisedButton label="Sign Out" onClick={this.onSignout} style={{textAlign:"center"}}/>

                </div>
              <br/>
              <List style={{width: "50%",margin:"auto",textAlign:"left"}}>
              
              {notices}
              </List>
              <FloatingActionButton secondary={true} onClick={this.onAdd}>
                  <ContentAdd/>
              </FloatingActionButton>
           
              <Dialog
          title="Add new Notice"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
           <TextField floatingLabelText='Title ' onChange={this.onFirst} />
              <br/>
              <TextField floatingLabelText='Desc' onChange={this.onLast}/>
        </Dialog>

        {this.state.red?<Redirect to="/" />:null}
            </div>

        )
    }


}