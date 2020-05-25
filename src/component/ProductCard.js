import React, { Component } from 'react';

class ProductCard extends Component {

    render() {
        return (
            <div className='column'>
                <img src={this.props.product.image} />
                <p>${this.props.product.price} </p>
                <button onClick={()=>this.props.addToCart(this.props.product)}> Add to Cart </button>
            </div>
        );
    }
}

export default ProductCard;