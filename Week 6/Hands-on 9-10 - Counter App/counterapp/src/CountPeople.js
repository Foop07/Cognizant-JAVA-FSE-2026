import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
    this.UpdateEntry = this.UpdateEntry.bind(this);
    this.UpdateExit = this.UpdateExit.bind(this);
  }

  UpdateEntry() {
    this.setState((prevState) => ({
      entrycount: prevState.entrycount + 1
    }));
  }

  UpdateExit() {
    this.setState((prevState) => ({
      exitcount: prevState.exitcount + 1
    }));
  }

  render() {
    return (
      <div>
        <h2>People who entered the mall: {this.state.entrycount}</h2>
        <h2>People who exited the mall: {this.state.exitcount}</h2>
        <button onClick={this.UpdateEntry}>Login</button>
        <button onClick={this.UpdateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
