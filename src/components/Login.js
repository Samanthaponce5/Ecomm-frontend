import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'

class Login extends Component {
    state = {}
    render() {
        const {firstName, lastName, username, password, inputChange, toggleSubmit} = this.props
        return (
            <div>
                <h3>Create Account</h3>
                <Form onSubmit={toggleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input fluid label="First Name" placeholder="Jane" name="firstName" value={firstName} onChange={inputChange} />
                        <Form.Input fluid label="Last Name" placeholder="Doe" name="lastName" value={lastName} onChange={inputChange} />
                        <Form.Input fluid label="Username" placeholder="JaneDoe" name="username" value={username} onChange={inputChange} />
                        <Form.Input fluid label="Password" placeholder="****" name="password" value={password} onChange={inputChange} type='password'/>
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}

export default Login;