import React, { Component } from 'react'
import ProductCard from './ProductCard.js'

export default class Products extends Component {


    render() {
        return (


            <div class="grid-container-products">

                {this.props.products.map(product => (
                    <ProductCard key={product.id} user={this.props.user} product={product} addToCart={this.props.addToCart} />
                ))}

            </div>
        )
    }
}