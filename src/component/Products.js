import React, { Component } from 'react'

export default class Products extends Component{

    render(){
        return(
            <div>
                <h3>These are the products</h3>
        <h1>{this.props.currentUser.first_name}</h1>
        <img src={`http://localhost:4000/${this.props.currentImage}`}/>
            </div>
        )
    }
}