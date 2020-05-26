import React, { Component } from 'react'
import ProductCard from './ProductCard.js'

export default class Products extends Component {


    render() {
        return (
           

            <div class="grid-container-products">
               
                {this.props.products.map(product => (
                    <ProductCard key={product.id} product={product} addToCart={this.props.addToCart} routerProps={this.props.routerprops}/>
                ))}
                 
            </div>
        )
    }
}