import React, { Component } from 'react';
import CartCard from './CartCard'
class Cart extends Component {
    render() {
        return (
            <div className='cart'>
                {this.props.cart.map((cart,index) => (
                    <CartCard key={index} cart={cart} />
                ))}
            </div>
        )
    }
}

export default Cart;