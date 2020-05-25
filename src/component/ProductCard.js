import React, { Component } from 'react';

class ProductCard extends Component {

    render() {
        console.log(this.props.product)
        return (
            <div className='column'>
                <img src={this.props.product.image} />
                <button> Add to Cart </button>
            </div>
        );
    }
}

export default ProductCard;