import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
	state = {
		username: '',
		password: '',
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()

		// let user ={
		//     first_name: this.state.username,
		//     password: this.state.password
		// }

		fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(this.state),
		})
			.then((response) => response.json())
			.then((data) => {
				localStorage.setItem('userId', data.user.id);
				this.props.setUser(data.user)
				this.props.history.push('/home')
			});
		this.setState({
			username: '',
			password: '',
		})
	}
	render() {
		return (
			<>
			 <div class='login'>
              LOGIN
              </div>
			
			<form className="loginForm" onSubmit={this.handleSubmit}>
				<input
					autoComplete="off"
					className="loginputname"
					type="text"
					placeholder="User Name"
					name="username"
					value={this.state.username}
					onChange={this.handleOnChange}
				/>
				     
				<br />

				<label></label>
				<input
					autoComplete="off"
					className="loginputpassword"
					type="password"
					placeholder="Enter Password"
					name="password"
					value={this.state.password}
					onChange={this.handleOnChange}
				/>
				<br />

				<input className="loginbutton btn-border-4" type="submit" value="Login" />
				<ul className="signuplog">
					<p className='dont'>
						<b>Don't have an account?</b>
					</p>
					<br />
					<p >
						<Link className='signuplink' to="/create_account">Sign up</Link>
					</p>
				</ul>
			</form>
		
			</>
		);
	}
}

export default withRouter(Login);
