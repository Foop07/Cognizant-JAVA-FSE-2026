import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      rupees: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // 1 Euro = approximately 89 Indian Rupees
    const euroValue = (parseFloat(this.state.rupees) / 89).toFixed(2);
    this.setState({
      euro: euroValue
    });
  }

  render() {
    return (
      <div>
        <h3>Indian Rupees to Euro Convertor</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter amount in Indian Rupees:
            <input
              type="number"
              value={this.state.rupees}
              onChange={this.handleChange}
              placeholder="Enter INR"
            />
          </label>
          <br /><br />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && (
          <h3>Euro: €{this.state.euro}</h3>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
