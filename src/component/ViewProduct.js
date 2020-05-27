import React, { Component } from 'react';

class ProductProfile extends Component {
    
state={
    products:[],
    first_name:[],
    last_name:[]
}


componentDidMount() {
 

    fetch(`http://localhost:4000/products/${this.props.routerprops.match.params.id}`)
        .then(res => res.json())
        .then(products => this.setState({products}))
        .then(()=>{
            
           fetch(`http://localhost:4000/users/${this.state.products.user_id}`)
        .then(resp=>resp.json())
        .then((data)=> this.setState({first_name:data.first_name, last_name:data.last_name}))
        })
}
    render() {
        const string = this.state.products.category
      
       console.log(string)
        return (
              <div className="grid-item"> 
        {/* <h1>{this.state.products}</h1> */}
        <p className='productuser'>Photo By: {this.state.first_name} {this.state.last_name}</p>
        <p className='imgtitle'>{this.state.products.title}</p>
        {/* <p className='imgcategories'>{this.state.products.type_of}</p> */}
        <p className='imgprice'>$<strong>{this.state.products.price}</strong></p>
        <div class="img-wrapper">
        <img class="inner-img"  src={this.state.products.image} alt="image"/>
            </div>



    </div>

        );
    }
}

export default ProductProfile;