import React, { Component } from 'react';
import Quantity from './Quantity';

class ProductProfile extends Component {
	state = {
		products: [],
		first_name: [],
		last_name: [],
	};

	componentDidMount() {
		fetch(
			`http://localhost:4000/products/${this.props.routerprops.match.params.id}`
		)
			.then((res) => res.json())
			.then((products) => this.setState({ products }))
			.then(() => {
				fetch(`http://localhost:4000/users/${this.state.products.user_id}`)
					.then((resp) => resp.json())
					.then((data) =>
						this.setState({
							first_name: data.first_name,
							last_name: data.last_name,
						})
					);
			});
	}
	render() {
		const { id } = this.state.products;
		const { history, user, addToCart, routerprops } = this.props;
		console.log(this.state.products)
		return (
			<div className="grid-item">
				{/* <h1>{this.state.products}</h1> */}
				<p className="productuser">
					Photo By: {this.state.first_name} {this.state.last_name}
				</p>
				<p className="imgtitle">{this.state.products.title}</p>
				{/* <p className='imgcategories'>{this.state.products.type_of}</p> */}
				<p className="imgprice">
					$<strong>{this.state.products.price}</strong>
				</p>
				<label className="textquantity">Quantity:</label>
				<p className="imgquantity">
					{' '}
					<Quantity quantity={this.props.quantity} product={this.state.products} onDecrement={this.props.onDecrement} onIncrement={this.props.onIncrement}/>
				</p>
				<button className="addtocartimg" onClick={this.props.user.username ?() => {
									addToCart(this.state.products)
									routerprops.history.push('/cart')
							  }: () => routerprops.history.push('/login')}>Add To Cart</button>
				<div className="img-wrapper">
					<img
						className="inner-img"
						src={this.state.products.image}
						alt="image"
					/>
				</div>
			</div>
		);
	}
}

export default ProductProfile;
