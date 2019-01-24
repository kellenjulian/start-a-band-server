import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';


import './Auth.css';

class Auth extends Component {

    state = {
        login: true,
        userName: '',
        email: '',
        isBand: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const url = this.state.login ? `${APIUrl}/auth/signin` : `${APIUrl}/auth/signup`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                userName: this.state.userName,
                email: this.state.email,
                isBand: this.state.isBand,
                password: this.state.password
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.props.tokenHandler(data.sessionToken))
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value}, () => console.log(this.state))
    }

    logginToggle = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({
            login: !login,
            userName: '',
            email: '',
            isBand: '',
            password: '',    
        })
    }

    render() {

        let title = this.state.login ? "Login" : "Signup";

        let signupFields = this.state.login
            ? null
            : (
                <div>
                    <label htmlFor="userName">UserName:</label><br />
                    <input type="text" id="firstName" onChange={this.handleChange} value={this.state.userName}/><br />
                    <label htmlFor="userName">UserName:</label><br />
                    <input type="text" id="firstName" onChange={this.handleChange} value={this.state.userName}/><br />
                    
                </div>
            )

            return(
                <form className="cardlike" onSubmit={this.handleSubmit}>
                    <h1>{title}</h1>
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" onChange={this.handleChange} value={this.state.email} /><br />
                    <label htmlFor="password">Password:</label><br /> 
                    <input type="text" id="password" onChange={this.handleChange} value={this.state.password} /><br />
                    {signupFields}
                    <button onClick={this.logginToggle}>Login/Signup Toggle</button><br />
                    <button type="submit">Submit User Data</button>
                </form>
            )
    }
}

export default Auth;