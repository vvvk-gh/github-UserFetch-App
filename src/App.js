import React from 'react';
import './App.css';
import Search from './components/Search'
import UserCard from './components/UserCard'

class App extends React.Component {
  state =  {
    user : null,
    error : null,
    loading : false
  }

 fetchUserData = async(username) =>{
  const res = await fetch(`https://api.github.com/users/${username}`) 
      if(res.ok){
          const data = await res.json();      
          return {data} 
      }
  const error = (await res.json()).message;
    return {error};
 }

 fetchRepos = async (username) =>{
  const res = await fetch (`https://api.github.com/users/${username}/repos?page=1`)
      if(res.ok){
        const data = await res.json();      
        return {data} 
      }

    const error = (await res.json()).message;
    return {error};

 }


  async fetchData(username){
    this.setState({loading : true} , async ()=>{
      try{
        const {data , error} = await this.fetchUserData(username); 

        if(data){
          this.state({  user:data,loading: false})
        }

        this.setState({
          error,
          loading : false,

        });

      }catch (err){
       this.setState({
          error:'There is some error'+err,
          loading:false, 
        }); 
      }

      })
  }


  
  render(){
  const {error , loading , user} = this.state;
    return (
      <div>
      <Search fetchData = {(username) => this.fetchData(username)} />
      <div className="text-center pt-5">
      {error && <p className = "text-danger">{error}</p>}
      {loading && <p>Loading...</p>}
      {!error && !loading && user && <UserCard user = {user}/>}
      </div>
      </div>
    )
  }
}

export default App;
