//Approach 1 : two way binding
import React from 'react'

export default class Search extends React.Component{
   constructor(props){
       super(props)
       this.state = {
            userName : "",
       }
   }
   
handleUserNameChange = e =>{
    const value = e.target.value
    
    this.setState({
        userName : value,
    })

}     
   
   render(){
    
    const {userName} = this.state;
    //destructing the fetchData from the props
    // const {fetchData} = this.props;
        return (
            
        <div className ="bg-dark ">
            <div className = "container py-5">
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <div className="row">
                            <div className="col-9">
                            <input 
                            className = "form-control" 
                            value = {userName} 
                            onChange = {this.handleUserNameChange}  
                            type = "text" 
                            placeholder="Enter UserName" 
                            />
                            </div>
                            {/* with destructing the props */} 
                            {/*<button className="col-3 round-corners btn-large btn-success" onClick = {() => fetchData(userName)}>
                                Search
                            </button>*/}
                            {/* without destructing the props */}
                            <button className="col-3 round-corners btn-large btn-success" onClick = {() => this.props.fetchData(userName)}>
                                Search
                            </button>

                        </div>
                    </div>
                </div>
            </div>  
     </div>
        
       )
    }
}