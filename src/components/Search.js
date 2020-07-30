import React from 'react'

export default class Search extends React.Component{
//   //With constructor
//     constructor(props){
//         super(props)

//         this.state = {
//          userName :'',   
//         }     
//     }

   //With out constructor and 
   state = {
       userName : "",
   } 
   
    render(){
        //accessing the data from a variable
        //const name = this.state.userName
        //accessing the data via destructuring
        const {userName} = this.state;
        return (<input value = {userName} type = "text" placeholder="Enter UserName"/>)
    }
}