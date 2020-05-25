import React, { Component } from 'react'
import Products from './Products';

export default class Home extends Component{

    render(){
        console.log(this.props)
        return(
            <div className='products'>
                <Products products={this.props.products} addToCard={this.props.addToCard}/>
            </div>
        )
    }
}