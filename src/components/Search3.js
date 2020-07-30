import React from 'react'

export default class Search3 extends React.Component{
    
    handleKeyDown = (e) =>{
        //e is the onkeydown event
        //since we dont want alert on everytime a key is pressed and only want to alert when user presses enter
        //keycode for enter button is 13
        if(e.keyCode == 13){
        const value = e.target.value
        alert(value)
        }
        
    }
    
    render(){
        return (
            <div>
                <h1>Search Box 3 : </h1>
                {/* on keydown which means do an action when a key is pressed */}
                <input type="text"  onKeyDown = {this.handleKeyDown}  name="username" placeholder ="Enter Username"/>
            </div>
        )
    }
}