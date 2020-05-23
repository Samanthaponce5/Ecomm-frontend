import React from 'react';

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			first_name: '',
			password: '',
		};
	}

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
        
        let user ={
            first_name: this.state.first_name, 
            password: this.state.password
        }

        fetch('http://localhost:4000/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(response=>response.json())
        .then(data=>{
            this.props.setCurrentUser(data)
            // this.props.routerProps.history.push('/profile')
        })


	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label><b>Name:</b></label>
				<input
					type="text"
					name="first_name"
					value={this.state.first_name}
					onChange={this.handleOnChange}
				
				/>

				<label>
					<b>Password:</b>
				</label>
				<input
					type="password"
					placeholder="Enter Password"
					name="password"
					value={this.state.password}
					onChange={this.handleOnChange}
					
				/>

				<input type="submit" value="Login" />
			</form>
		)
	}
}
