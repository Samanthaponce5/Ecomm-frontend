import React, { Component } from 'react';
import ProductCard from './Product Card'
// import { Card } from 'semantic-ui-react'


class ProductContainer extends Component {

    state = {}
    render() {
        return (
            <div>
                <h1>E C O M M   P R O D U C T S</h1>
                <br/>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        );
    }
}

export default ProductContainer;