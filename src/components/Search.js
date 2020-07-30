
import React from 'react'

export default class Search extends React.Component{
   state = {
       userName : "",
   } 
   
   handleUserNameChange = (e) =>{
       //we get the whole event as an parameter
       console.log(e.target);
       //e.target means basically the html element on which we have our event (onchange event in our case)
      const value = e.target.value
      //e.target.value gives you the target value
      this.setState({
          //updating the username with the new value
          userName : value
      })
   }

    render(){
        const {userName} = this.state;
        //here onchange is an event
        return (<input value = {userName} onChange = {this.handleUserNameChange}  type = "text" placeholder="Enter UserName"/>)
    }
}