import React, { Component } from 'react';
import CartCard from './CartCard'
class Cart extends Component {
    render() {
        console.log(this.props.total)
        return (
            <div className='cart'>
                {this.props.cart.map((cart,index) => (
                    <CartCard key={index} product={cart} />
                ))}
                Total: {this.props.total}
                <button> Checkout </button>
            </div>
        )
    }
}

export default Cart;