
import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import Search from './Search';
export default class NavBar extends Component {
	render() {
		return (
			<header className="top">

				<nav className='webnav'>

					<ul>
						<li className="logo">Picology</li>

						<li className="homeLink">
							<Link to="/home">Home</Link>
						</li>

						<li className="sellContentLink">
							<Link to="/sellProduct">Sell Content</Link>
						</li>
						<Search search={this.props.search} searchChange={this.props.searchChange}/>
						<li className='cartlink'>
      
							<Link to="/cart">Cart</Link>
						</li>
						<div className="nav-underline"></div>
						<div className="nav-underline2"></div>
						{this.props.user === '' ? (
							<li className='loglink'>
								<Link to="/login">Login</Link>
								
							</li>
						) : (
							<>
								<li className='loglink' onClick={this.props.logout}>
									<Link to="/home">Log out</Link>
								</li>
								<li className="welcome">
									<Link to="#">
										Welcome,<br/> {this.props.user.username}
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
			</header>
		)
	}
}
