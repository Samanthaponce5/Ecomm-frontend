import React, { Component } from 'react';
import CartCard from './CartCard'
import { Link } from 'react-router-dom';

class Cart extends Component {
    state={
        total:this.props.total,

        address:'',
        zipcode:'',
        state:'',
        city:'',
        card:''


    }

    handleChange=(e)=>{
        const{name, value}=e.target
        this.setState({[name]:value})
    }

    handleClick=(e)=>{
        e.preventDefault()
        this.props.toggleCheckout(this.props.cart)
        const{address, zipcode, state, city, card}=this.state
        fetch(`http://localhost:4000/users/${this.props.user.id}`,{
            method:'PATCH',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                address,
                zipcode,
                state,
                city,
                card
            })
        })
        .then( this.props.routerProps.history.push('/confirmation'))


    }

   totalPrice=(newTotal)=>{
       const{total}=this.state
       console.log('does it?',total)
        this.setState({total:newTotal})
    }
    render() {

        let cartImg =require('../image/ezgif.com-gif-maker (4).gif')
        // console.log(this.props)
        const {cart} = this.props

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
    //   console.log("showww",removedProductsDuplicates)
// console.log(cart)
console.log('cart', this.state.total)
console.log('cart length', this.props.cart)

        return (
            <div className='whole'>
            <div className='cart'>

                {removedProductsDuplicates.map((cart, index) => (
                    <CartCard key={index} product={cart} quantity={productQTY[cart.title]} addToCart={this.addToCart} total={this.state.total} totalPrice={this. totalPrice}/>
                ))}
                </div>
               {this.props.cart.length > 0 ?
               <>
                <p className='checkoutotal'>Total: ${this.props.total}</p>
              
                <form className='billing' onSubmit={this.handleClick }>

                     <input required className='billadress' type="text" placeholder='Address' name="address" value={this.state.address} onChange={this.handleChange}/><br/>
                
                    <input required className='billstate' type="text" placeholder='State' name="state" value={this.state.state} onChange={this.handleChange}/><br/>

                    <input required className='billcity' type="text" placeholder='City' name="city" value={this.state.city} onChange={this.handleChange}/><br/>

               
                    <input required className='billzip' type="text" placeholder='Zipcode'  name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/><br/>
                
                    <input required className='billcard' type="text"  placeholder='Card Number' name="card" value={this.state.card} onChange={this.handleChange}/><br/>
               
                    <button className='checkoutbtn' onSubmit={this.handleClick } >
                        Checkout
                    {/* <Link className='toconfirm' to='/confirmation'>Checkout</Link> */}
                </button>
               </form>
               </> : 
               <>
               <h1 className='empty'>Empty Cart</h1>
                <img className='cartimg' src={cartImg} alt='cartImg' />
                </>
                 } 


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