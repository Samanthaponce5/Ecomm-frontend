import React, { Component } from 'react';

class ProductProfile extends Component {
    
state={
    products:''
}
componentDidMount() {
 

    fetch(`http://localhost:4000/products/${this.props.routerProps.match.params.id}`)
        .then(res => res.json())
        .then(products => this.setState({products}))
}
    render() {
        console.log(this.state.products)
        return (
              <div className="grid-item"> 
    <h1 className="hi">hi</h1>
        {/* <h1>{this.state.products.title}</h1>
        <h1>{this.state.products.category}</h1>
        <h1>{this.state.products.price}</h1>
        <img src={this.state.products.image} alt="image"/> */}



    </div>

        );
    }
}

export default ProductProfile;