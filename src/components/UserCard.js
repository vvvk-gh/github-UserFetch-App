import React from 'react'

//functional
// export default function Usercard({ user }){
//     return (`User Data : ${user.login}`);
// }

//class component without constructor

export default class UserCard extends React.Component{

    render(){
        return ("User Data" +this.props.user.public_repos)
    }
}

