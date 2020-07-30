//Approach 2 : React Ref
 import React from 'react'

export default class Search2 extends React.Component{
  //Create a variable for react ref
  //where ever this is included it creates a reference for that element
    inputRef = React.createRef()

    handleClick = () =>{
        //inputRef.current refer comments in 19
        const value = this.inputRef.current.value
            alert(`The input value is ${value}`)
    }
    render(){
        return (
            <div>
            <h1>Search Box 2 :React Ref </h1>
            <br />
            {/* when an  ref is passed in the render() that can be accessible via inputRef.current */}
            <input ref = {this.inputRef} type="text"  name = "username" placeholder="SearchBox2"/>
            <button onClick = {this.handleClick}>Click Me</button>
            </div>
            
        ) 
  }
}

