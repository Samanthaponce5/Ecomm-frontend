import React, { Component } from 'react';

class CartCard extends Component {
    render() {
        console.log(this.props.product)
        return (
            <div>
                {this.props.product.title}
                {this.props.product.price}
            </div>
        );
    }
}

export default CartCard;