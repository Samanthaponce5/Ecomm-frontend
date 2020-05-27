import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
class ProductCard extends Component {
    handleClick=()=>{
        this.props.routerprops.history.push(`/products/${this.props.product.id}`)
    }
    render() {
      console.log('card',this.props.product)
        return (
            <>
            
            <div  className="grid-item-products">
                 <div className="wrapper">      
                 <div className="image-wrapper">
                <img onClick={this.handleClick}  className="product-pic" src={this.props.product.image} alt="img" />
                </div>
         </div>
             
             
                {/* <p>${this.props.product.price} </p> */}
                <button className="cart-btn" onClick={()=>this.props.addToCart(this.props.product)}> Add to Cart </button>
                </div>
                </>
           
        );
    }
}

export default withRouter(ProductCard);
