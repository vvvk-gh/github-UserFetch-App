import React from 'react';
import './App.css';
import Search from './components/Search'


class App extends React.Component {
//state without constructor as constructor is not mandatory
  state =  {
    user : null
  }

  async fetchUserData(username){
    //fetch git hub user data

      try{
        //fetch is method provided by browsers
          const res = await fetch(`https://api.github.com/users/${username}`) 
          if(res.ok){
              const data = await res.json();
              //console.log(data);
              return (
                  this.setState({
                  user : data
                })
              )

          }
          else{
              console.log(`User doesn't exist`)
          }
        }catch (err){
            console.log(`${err}`)
        }
    
  }
  
  render(){

    return (
      //this jsx variable will be used in search.js
      <Search fetchData = {(username) => this.fetchUserData(username)} />
    );
  }
  
  
}

export default App;
