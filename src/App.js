import React, { Component } from 'react';

import Header from './components/Header/Header';
import './App.css';
import Auth from './components/Main/Auth/Auth';
import Posts from './components/Main/Posts/Posts';
import APIUrl from './helpers/environment';
import Sidebar from './components/Main/Sidebar/Sidebar';
import NewPost from "./components/Main/New-Post/NewPost"
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  state = {
    sessionToken: ''
  }

  //mock function

  handleSubmit = (event) => {
    fetch(`${APIUrl}/api/post/${event.target.value}`)
  }
  //

  removeSessionToken = () => {
    this.setState({sessionToken: ''})
  }

  storeSessionToken = (token) => {
    this.setState({sessionToken: token})
    localStorage.setItem('token', token)
  }

  viewConductor() {
    return (this.state.sessionToken !== '') ? <Sidebar />: <Auth tokenHandler={this.storeSessionToken}/>
  }
  
  render() {
    return (
        <Router>
      <div className="App">
        <Header logout={this.removeSessionToken}/>
        {/* <Sidebar /> */}
        {this.viewConductor()}
      </div>
        </Router>
    );
  }
}

export default App;
