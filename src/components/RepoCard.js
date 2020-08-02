import React from 'react'

export default class RepoCard extends React.Component{
        
    render(){
        const {repo} =this.props;

        return (
                <div className="card my-2">
                    <div className="card-body">
                        <a href={repo.html_url}>
                            <h3>{repo.full_name}</h3>
                        </a>
                            <p>Watchers :<strong>{repo.watchers_count}</strong></p>
                            <p>Stars : <strong>{repo.stargazers_count}</strong></p>
                    </div>
            </div>
        )
    }
}