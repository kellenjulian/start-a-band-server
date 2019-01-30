import React, {Component} from 'react';

import APIUrl from '../../../helpers/environment';
import { Link } from 'react-router-dom';


import './Auth.css';

class Auth extends Component {

    constructor(props) {
        super(props)
    this.state = {
        login: true,
        username: '',
        email: '',
        isBand: false,
        password: '',
        isHidden: true
    }
}
    handleSubmit = (event) => {
        event.preventDefault()
        const url = this.state.login ? `${APIUrl}/api/auth/signin` : `${APIUrl}/api/auth/signup`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({ user:
                {
                username: this.state.username,
                email: this.state.email,
                isBand: this.state.isBand,
                password: this.state.password
                }
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.props.tokenHandler(data.sessionToken))

            .catch((err) => {
                console.error(err);
             })
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
            password: ''
        })
    }

    infoToggle = () => {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }


    render() {

        let info = this.state.isHidden ? <div></div> : <div>
            <p>
    This website is dedicated to help you make your desired musical endeavors
    a reality! Whether you're a band or an individual searching for a band, we 
    make it as easy as possible for you to get your thing goin'!!!

    It's Easy!
</p>

<ol>
    <li>Create an account, click the "Is Band" checkbox if you're a band looking for more members!</li>
    <li>Browse the current posts up, and see if any of them catch your interest!</li>
    <li>Make your own post in the New Post tab, and go to My Posts to see any posts you've made so far!</li>
    <li>Be cool, and have fun!</li>
</ol>
        </div>

        let title = this.state.login ? "Login" : "Signup";

        let signupFields = this.state.login
            ? null
            : (
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" id="email" onChange={this.handleChange} value={this.state.email}/><br />
                    <label htmlFor="isBand">Is Band:</label><br />
                    <input type="checkbox" defaultChecked={this.state.isBand} id="isBand" onChange={this.handleChange} value={this.state.isBand} />
            </div>
                    

            )

            return(
                <div>
                <form className="cardlike" onSubmit={this.handleSubmit}>
                    <h1>{title}</h1>
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" onChange={this.handleChange} value={this.state.username} /><br />
                    <label htmlFor="password">Password:</label><br /> 
                    <input type="password" id="password" onChange={this.handleChange} value={this.state.password} /><br />
                    {signupFields}
                    
                    <button onClick={this.logginToggle}>Login/Signup Toggle</button><br />
                    <button type="submit">Submit User Data</button>
                </form>
                <div>
                    <h1>Welcome to Start-a-Band!</h1>
                    <button onClick={this.infoToggle}>Info</button>
                    <div id="infoDiv">
                    { info }
                </div>
                </div>
                </div>
            )
    }
}

export default Auth;