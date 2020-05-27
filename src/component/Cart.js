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
                <button onClick={()=> this.props.toggleCheckout(this.props.cart)}> Checkout </button>
            </div>
        )
    }
}

export default Cart;