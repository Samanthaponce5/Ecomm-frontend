import React, { Component } from 'react';

class CartCard extends Component {
    render() {
        return (

            <ul className='imgcartholder'>
                <p className='checkouttitle' >{this.props.product.title}</p>
                <p className='checkoutprice' >${this.props.product.price}</p>
                <img className='imgcart' src={this.props.product.image} alt='product' />
                <div className="qty-box2">
                  <span className="dec2" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>
                  <span className="qty2">{this.props.quantity}</span>
                  <span className="inc2" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>
                </div>
                {/* <p className='checkoutquantity'>x{this.props.quantity}</p> */}
              
            </ul>

        );
    }
}

export default CartCard;


