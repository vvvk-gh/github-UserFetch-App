import React from 'react'

export default class RepoCard extends React.Component{
        
    render(){
        const {repo} =this.props;

        return (
                <div className="card my-2">
                    <div className="card-body">
                        <a href={repo.html_url}>
                            <h1>{repo.full_name}</h1>
                            <p>Watchers :<strong>{repo.watchers_count}</strong></p>
                            <p>Stars : <strong>{repo.stargazers_count}</strong></p>
                        </a>
                    </div>
            </div>
        )
    }
}