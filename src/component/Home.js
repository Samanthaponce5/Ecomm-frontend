import React, { Component } from 'react'
import Products from './Products';

export default class Home extends Component{

    render(){
        return(
            <div className='products'>
                <Products products={this.props.products} addToCart={this.props.addToCart}/>
            </div>
        )
    }
}