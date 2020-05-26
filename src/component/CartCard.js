import React, { Component } from 'react';

class CartCard extends Component {
    render() {
        console.log(this.props.product)
        return (
          
            <ul className='imgcartholder'>
                <p>{this.props.product.title}</p>
                <p>{this.props.product.price}</p>
               <p><img className='imgcart' src= {this.props.product.image} alt='product'/></p>
               <hr/>
            </ul>
           
        );
    }
}

export default CartCard;