import React from 'react';
import './App.css';
//Approach 1 : Two way binding
// import Search from './components/Search';
//Approach 2 : React Ref
//import Search2 from './components/Search2'
//Approach 3 : Accessing from event object
import Search3 from './components/Search3'

function App() {
  return (
    <Search3 />
  );
}

export default App;
