import React, { Component } from 'react';

class CartCard extends Component {
    state={
        quantity:this.props.quantity,
        total:this.props.total
    }
    onIncrement=()=>{
        this.setState(prevState=>({
            quantity:prevState.quantity +1

        }))
        this.setState({
            total: this.state.total+ this.props.product.price
         })
        
      
        // console.log("decrement",this.state.quantity)
    }
    onDecrement=()=>{
        this.setState(prevState=>({
            quantity:prevState.quantity -1

        }))
     
        
            this.setState({
                total: this.state.total- this.props.product.price
             })
      
            

    }
  
 
     componentDidMount(){
         this.props.totalPrice(this.state.total)

     }
    
    render() {
        console.log('total',this.props.product.title,this.state.total)
        console.log('quantity', this.state.quantity)
        return (
            <div className='scrolly'>
            <ul className='imgcartholder'>
                <p className='checkouttitle' >{this.props.product.title}</p>
                <p className='checkoutprice' >${this.props.product.price}</p>
                <img className='imgcart' src={this.props.product.image} alt='product' />
                <div className="qty-box2">
                  <span className="span2 dec2" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>
                  <span className="span2 qty2">{this.state.quantity}</span>
                  <span className="span2 inc2" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>
                </div>
                {/* <p className='checkoutquantity'>x{this.props.quantity}</p> */}
              
            </ul>
            </div>
        );
    }
}

export default CartCard;



// import React, { Component } from 'react';

// class CartCard extends Component {
//     render() {
//         return (

//             <ul className='imgcartholder'>
//                 <p className='checkouttitle' >{this.props.product.title}</p>
//                 <p className='checkoutprice' >${this.props.product.price}</p>
//                 <img className='imgcart' src={this.props.product.image} alt='product' />
//                 <div className="qty-box2">
//                   <span className="dec2" onClick={this.onDecrement} onTouchStart={this.onDecrement}>–</span>
//                   <span className="qty2">{this.props.quantity}</span>
//                   <span className="inc2" onClick={this.onIncrement} onTouchStart={this.onIncrement}>+</span>
//                 </div>
//                 {/* <p className='checkoutquantity'>x{this.props.quantity}</p> */}
              
//             </ul>

//         );
//     }
// }

// export default CartCard;


