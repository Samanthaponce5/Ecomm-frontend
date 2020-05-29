import React, { Component } from 'react';

class Confirmation extends Component {

    state={
        first_name: '',
        last_name:'',
        address:'',
        state:'',
        zipcode:''

    }

componentDidMount(){
    fetch(`http://localhost:4000/users/${this.props.user.id}`)
    .then((resp)=>resp.json())
    .then((newUpdate)=>this.setState({
        first_name:newUpdate.first_name,
        last_name:newUpdate.last_name,
        address:newUpdate.address,
        state:newUpdate.state,
        zipcode:newUpdate.zipcode
    }))
}
componentWillMount(){
    const{first_name,last_name,address,zipcode}=this.state
    this.setState({first_name,last_name,address,zipcode})
}

    render() {
        console.log('confirm pg',this.props.user)
        const doggo = require('../image/ezgif.com-gif-maker.gif')
       
        return (
            <div className='confirmation'>
                Thank you for your order,{this.props.user.first_name}!
                Items will arrive within 3-5 businees days!
               Ammount: {this.props.cart.length}
               address {this.state.address}
               State: {this.state.state}
               zipCode: {this.state.zipcode}
                {/* {this.props.cart.map(product => {
                    return <div className='orders' key={product.id}>
                        <img src={product.image} />
                        <div>{product.title} </div>
                        <div>${product.price} </div>
                    </div>
                })} */}
                    Your Total is ${this.props.total}! 
                    Thank you for shopping with Picology!
                    <img className='doggo' src={doggo} alt='doggo'/>
            </div>
        );
    }
}

export default Confirmation;