import React, { Component } from 'react';
// import { Form } from 'semantic-ui-react'

class Login extends Component {
    state = {}
    render() {
        const {firstName, lastName, username, password, inputChange, toggleSubmit} = this.props
        return (
            <div>
                <h3>Create Account</h3>
                <form onSubmit={toggleSubmit}>
                        <input fluid label="First Name" placeholder="Jane" name="firstName" value={firstName} onChange={inputChange} />
                        <input fluid label="Last Name" placeholder="Doe" name="lastName" value={lastName} onChange={inputChange} />
                        <input fluid label="Username" placeholder="JaneDoe" name="username" value={username} onChange={inputChange} />
                        <input fluid label="Password" placeholder="****" name="password" value={password} onChange={inputChange} type='password'/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Login;