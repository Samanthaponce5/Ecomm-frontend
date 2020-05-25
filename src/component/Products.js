import React, { Component } from 'react'
import ProductCard from './ProductCard.js'

export default class Products extends Component {


    render() {
        return (
            <div className='row'>
                {this.props.products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={this.props.addToCart}/>
                ))}

            </div>
        )
    }
}