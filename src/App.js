import React from 'react';
import './App.css';
import Search from './components/Search'
import UserCard from './components/UserCard'
import RepoCard from './components/RepoCard' 

class App extends React.Component {
  state =  {
    user : null,
    error : null,
    repos: [],
    userDataError: null,
    reposError : null,
    loading : false,
    //intialize a new variable page in the state
    page:1,
  }

 fetchUserData = async(username) =>{
  const res = await fetch(`https://api.github.com/users/${username}`) 
      if(res.ok){
          const data = await res.json();      
          return {data} 
      }
  const error = (await res.json()).message;
    return {error};
 };

 fetchRepos = async (username) =>{
   const {page} = this.state;
  //make the page dyanamic 
  const res = await fetch (`https://api.github.com/users/${username}/repos?page=${page}`,
  );
      if(res.ok){
        const data = await res.json();      
       //console.log(data);
       //update and pass the page along with the data 
        return {data , page : page+1} 
      }

    const error = (await res.json()).message;
    
    return {error};

 };

  async fetchData(username){
    this.setState({loading : true} , async ()=>{
      try{

        const [user , repos] = await Promise.all([
          this.fetchUserData(username),
          this.fetchRepos(username)
        ]) 

        if(user.data !== undefined && repos.data !== undefined){
          //console.log(user)
          //console.log(repos)
         return this.setState({ 
                      user:user.data,
                      repos : repos.data,
                      //accessing the page data
                      page : repos.page,
                      loading: false
                      });
             }
        console.log("should print user not found on screen")
        this.setState({
          userDataError: user.error,
          reposError : repos.error,
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
  const {userDataError , reposError, loading , user , repos}  = this.state;

    return (
      <div>
      <Search fetchData = {(username) => this.fetchData(username)} />
      <div className="container">
          <div className="text-center pt-5">
            {loading && <p>Loading...</p>}
            {userDataError && <p className = "text-danger">{userDataError}</p>}
            </div>
            {!userDataError && !loading && user && <UserCard user = {user}/>}
            {reposError && <p className = "text-danger">{reposError}</p>}
            {!loading && !reposError && repos.map((repo) => <RepoCard key = {repo.id} repo = {repo} />)}
          </div>
      </div>
        
    )
  }
}

export default App;
