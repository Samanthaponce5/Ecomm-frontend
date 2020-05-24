import React, { Component } from 'react';
// import { Card } from 'semantic-ui-react'


class ProductCard extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>
                    <img src='https://www.bleaq.com/wp-content/uploads/katharina-jung-intro.jpg' alt='nature' />
                </div>
                <div className="content">
                    <div className="header">{/* Product Title */}</div>
                </div>
            </div>
        );
    }
}

export default ProductCard;