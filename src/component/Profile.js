import React, { Component } from 'react'

export default class Profile extends Component{

    render(){
   
        return(
            <div>
}
                <h3>This is the profile for</h3>
        <h1>{this.props.user.first_name}</h1>
       
       
            </div>
        )
    }
}