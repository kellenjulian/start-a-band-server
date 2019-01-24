import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import './App.css';
import Auth from './components/Main/Auth/Auth';
import Posts from './components/Main/Posts/Posts';
import APIUrl from './helpers/environment';

class App extends Component {
  state = {
    sessionToken: undefined
  }

  //mock function

  handleSubmit = (event) => {
    fetch(`${APIUrl}/pies/${event.target.value}`)
  }
  //

  removeSessionToken = () => {
    this.setState({sessionToken: undefined})
  }

  storeSessionToken = (input) => {
    this.setState({sessionToken: input})
  }

  viewConductor() {
    return (this.state.sessionToken !== undefined) ? <Posts />: <Auth tokenHandler={this.storeSessionToken}/>
  }
  
  render() {
    return (
      <div className="App">
        <Navbar logout={this.removeSessionToken}/>
        {this.viewConductor()}
      </div>
    );
  }
}

export default App;
