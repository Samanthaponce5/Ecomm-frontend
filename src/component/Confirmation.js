import React, { Component } from 'react';

class Confirmation extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='confirmation'>
                Thank you for your order,{this.props.user.first_name}!
                Items will arrive within 3-5 businees days!

                {this.props.cart.map(product => {
                    return <div className='orders' key={product.id}>
                        <img src={product.image} />
                        <div>{product.title} </div>
                        <div>${product.price} </div>
                    </div>
                })}
                    Your Total is ${this.props.total}! 
                    Thank you for shopping with Picology!
            </div>
        );
    }
}

export default Confirmation;