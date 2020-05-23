import React, { Component } from 'react'

export default class Profile extends Component{

    render(){
        return(
            <div>
                <h3>This is the profile for</h3>
        <h1>{this.props.currentUser.first_name}</h1>
        <img src={`http://localhost:4000/${this.props.currentAvatar}`}/>
            </div>
        )
    }
}