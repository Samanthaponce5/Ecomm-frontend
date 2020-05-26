import React, { Component } from 'react';

class ProductCard extends Component {

    render() {
        return (
            <>

                <div class="grid-item-products">
                    <div className="wrapper">
                        <div className="image-wrapper">
                            <img className="product-pic" src={this.props.product.image} alt="img" />
                        </div>
                    </div>


                    {/* <p>${this.props.product.price} </p> */}
                    <button className="cart-btn" onClick={() => this.props.user? this.props.addToCart(this.props.product): alert('Please Login')}> Add to Cart </button>
                </div>
            </>

        );
    }
}

export default ProductCard;