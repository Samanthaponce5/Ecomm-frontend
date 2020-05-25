import React, { Component } from 'react';
import CartCard from './CartCard'
class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                {this.props.cart.map((cart,index) => (
                    <CartCard key={index} product={cart} />
                ))}
                Total: {this.props.total}
            </div>
        )
    }
}

export default Cart;