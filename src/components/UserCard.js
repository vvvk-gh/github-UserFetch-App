import React from 'react'

//functional
// export default function Usercard({ user }){
//     return (`User Data : ${user.login}`);
// }

//class component without constructor

export default class UserCard extends React.Component{

    render(){
        const {user} = this.props;

        return (
            <div className="card">
                <div className="card-body">
                    <img src={user.avatar_url} alt="userProfilePic"/>
                    <h1>{user.name}</h1>
                    <p>{user.bio}</p>
                    <p>{user.location}</p>
                </div>
            </div>
        )
    }
}

