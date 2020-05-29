import React, { Component } from 'react';
import CartCard from './CartCard'
import { Link } from 'react-router-dom';

class Cart extends Component {
    

    render() {

        const { cart, total, totalPrice } = this.props

        let productQTY = {}

        const recordQTY = product => {
            Object.keys(productQTY).includes(product.title) ? productQTY[product.title] += 1 : productQTY[product.title] = 1
        }

        const removeDuplicates = (myArr, prop) => {
            return myArr.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
            })
        }



        let removedProductsDuplicates = removeDuplicates(cart, 'title')

        cart.forEach(recordQTY)
    
        // console.log(removedProductsDuplicates)

        return (
            <div>
                <div className='cart'>

                    {removedProductsDuplicates.map((cart, index) => (
                        <CartCard 
                        key={index} 
                        product={cart} 
                        quantity={productQTY[cart.title]} 
                        addToCart={this.addToCart} 
                        total={total} 
                        totalPrice={this.totalPrice} 
                        onDecrement={this.props.onDecrement}
                        onIncrement={this.props.onIncrement}
                        />
                    ))}
                </div>
                <p className='checkoutotal'>Total: ${total}</p>
                <button className='checkoutbtn' onClick={() => this.props.toggleCheckout(cart)}>
                    <Link to='/confirmation'>Checkout</Link>
                </button>
            </div>


        )
    }
}

export default Cart;






// import React, { Component } from 'react';
// import CartCard from './CartCard'
// import { Link } from 'react-router-dom';

// class Cart extends Component {
//     render() {

//         console.log(this.props)
//         const {cart} = this.props
//         let productQTY = {}

//         const recordQTY = product => {
//           Object.keys(productQTY).includes(product.title) ? productQTY[product.title] += 1 : productQTY[product.title] = 1
//         }

//         const removeDuplicates = (myArr, prop) => {
//           return myArr.filter((obj, pos, arr) => {
//               return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos
//           })
//         }

//         let removedProductsDuplicates = removeDuplicates(cart, 'title')

//         cart.forEach(recordQTY)
//     //   console.log("showww",removedProductsDuplicates)

//         return (
//             <div className='cart'>
//                 {removedProductsDuplicates.map((cart,index) => (
//                     <CartCard key={index} product={cart} quantity={productQTY[cart.title] } addToCart={this.addToCart}/>
//                 ))}
//                <p className='checkoutotal'>Total: ${this.props.total}</p>
//                 <button className='checkoutbtn' onClick={()=> this.props.toggleCheckout(this.props.cart)}> Checkout </button>            
//                 </div>

//         )
//     }
// }

// export default Cart;