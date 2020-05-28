
import React, { Component } from 'react';
import CartCard from './CartCard'
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {

        console.log(this.props)
        const { cart } = this.props
        let productQTY = {}

        // method to see how many of each product in cart
        const recordQTY = product => {
            Object.keys(productQTY).includes(product.title) ? productQTY[product.title] += 1 : productQTY[product.title] = 1
        }

        // method to return an array of unique products by title to present in html
        const removeDuplicates = (myArr, prop) => {
            return myArr.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
            })
        }

        // value from method that removes duplicate products from cart 
        let removedProductsDuplicates = removeDuplicates(cart, 'title')

        // method call to populate productQTY obj that sees how many products are in the cart
        cart.forEach(recordQTY)
        //   console.log("showww",removedProductsDuplicates)

        return (
            <div className='cart'>
                {removedProductsDuplicates.map((cart, index) => (
                    <CartCard key={index} product={cart} quantity={productQTY[cart.title]} addToCart={this.addToCart} />
                ))}
                <p className='checkoutotal'>Total: ${this.props.total}</p>
                <button className='checkoutbtn' onClick={() => this.props.toggleCheckout(this.props.cart)}>
                    <Link to='/confirmation'>Checkout</Link>
                </button>
            </div>

        )
    }
}

export default Cart;