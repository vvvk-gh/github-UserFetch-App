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

  async fetchUserData(username){
    //this.setState({//can update options} , optional callback ()=>{})
    //we are going to use that callback for loading
    this.setState({loading : true} , async ()=>{
     
      try{
        const res = await fetch(`https://api.github.com/users/${username}`) 
        if(res.ok){
            const data = await res.json();
            
            return (
                this.setState({
                user : data,
                error : null,
                loading: false,
              })
            )
        }

        const error = (await res.json()).message;
        
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
      <Search fetchData = {(username) => this.fetchUserData(username)} />
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
