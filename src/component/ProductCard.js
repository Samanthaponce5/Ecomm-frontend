import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class ProductCard extends Component {
    handleClick = () => {
        this.props.routerprops.history.push(`/products/${this.props.product.id}`)
    }
    render() {
        return (
            <>


                <div className="grid-item-products">
                    <div className="wrapper">
                        <div className="image-wrapper">
                            <img onClick={this.handleClick} className="product-pic" src={this.props.product.image} alt="img" />

                        </div>
                    </div>


                    <p className='prprice'>${this.props.product.price} </p>

                    <button className="cart-btn" onClick={() => this.props.user? this.props.addToCart(this.props.product): alert('Please Login')}> Add to Cart </button>

                </div>
            </>

        );
    }
}

export default withRouter(ProductCard);
