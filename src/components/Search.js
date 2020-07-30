import React from 'react'

export default class Search extends React.Component{
  //With constructor
    constructor(props){
        super(props)

        this.state = {
         userName :'',   
        }     
    }

   //With out constructor and 
//    state = {
//        userName : "",
//    } 
   
    render(){
        
        return (<input value = {this.state.userName} type = "text" placeholder="Enter UserName"/>)
    }
}