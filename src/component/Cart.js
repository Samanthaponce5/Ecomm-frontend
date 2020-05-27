import React, { Component } from 'react';
import CartCard from './CartCard'
class Cart extends Component {
    render() {
        console.log(this.props)
        const {cart} = this.props
        let productQTY = {}

        // method to see how many of each product  in the cart
        const recordQTY = product => {
          Object.keys(productQTY).includes(product.title) ? productQTY[product.title] += 1 : productQTY[product.title] = 1
        }
    
        // method to return an array of only unique products by title to represent in html
        const removeDuplicates = (myArr, prop) => {
          return myArr.filter((obj, pos, arr) => {
              return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
          })
        }
    
        // variable assigned to return value from method that removes duplicate products from cart 
        let removedProductsDuplicates = removeDuplicates(cart, 'Title')
    
        // method call to populate productQTY object that tracks how many products are in the cart
        cart.forEach(recordQTY)
      

        return (
            <div className='cart'>
                {removedProductsDuplicates.map((cart,index) => (
                    <CartCard key={index} product={cart} />
                ))}
                Total: {this.props.total}
                <button> Checkout </button>
            </div>
        )
    }
}

export default Cart;