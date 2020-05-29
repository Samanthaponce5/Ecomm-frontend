import React, { Component } from 'react';

class Confirmation extends Component {

    state={
        first_name: '',
        last_name:'',
        address:'',
        state:'',
        city:'',
        zipcode:''

    }

componentDidMount(){
    fetch(`http://localhost:4000/users/${this.props.user.id}`)
    .then((resp)=>resp.json())
    .then((newUpdate)=>this.setState({
        first_name:newUpdate.first_name,
        last_name:newUpdate.last_name,
        address:newUpdate.address,
        city:newUpdate.city,
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

        let truck=require("../image/ezgif.com-rotate.gif")
       
        return (
            <>
            <div className='confirmation'>
            <h3>Thank you for your order, {this.props.user.first_name}!</h3>
            <p>Items will arrive within 3-5 businees days!</p>
             <p> Address: {this.state.address} {this.state.city} {this.state.state} {this.state.zipcode} </p>
              
                {/* {this.props.cart.map(product => {
                    return <div className='orders' key={product.id}>
                        <img src={product.image} />
                        <div>{product.title} </div>
                        <div>${product.price} </div>
                    </div>
                })} */}
                    <p>  Amount: {this.props.cart.length}</p>

                    <p>Your Total is ${this.props.total}! </p>
                    <p>Thank you for shopping with us!</p>
                    <p className="cover"></p>

            </div>
                                < img className="truck" src={truck}/>
            </>
        );
    }
}

export default Confirmation;