import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.setState({ isLoggedIn: true });
  }

  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let page;

    if (isLoggedIn) {
      button = <button onClick={this.handleLogout}>Logout</button>;
      page = <UserPage />;
    } else {
      button = <button onClick={this.handleLogin}>Login</button>;
      page = <GuestPage />;
    }

    return (
      <div className="App">
        <h1>Flight Ticket Booking App</h1>
        {button}
        {page}
      </div>
    );
  }
}

export default App;
