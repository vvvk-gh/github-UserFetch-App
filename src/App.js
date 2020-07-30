import React from 'react';
import './App.css';
import Search from './components/Search'


class App extends React.Component {
  
  fetchUserData(username){
    //fetch user data  
    alert(username);
  }
  
  render(){

    return (
      //this jsx variable will be used in search.js
      <Search fetchData = {(username) => this.fetchUserData(username)} />
    );
  }
  
  
}

export default App;
