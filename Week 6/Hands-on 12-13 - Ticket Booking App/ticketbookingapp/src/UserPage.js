import React, { Component } from 'react';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedFlight: ''
    };
  }

  bookTicket(flightNo) {
    this.setState({
      bookedFlight: flightNo
    });
    alert('Ticket booked successfully for flight ' + flightNo + '!');
  }

  render() {
    return (
      <div>
        <h2>Welcome, User!</h2>
        <h3>Book Your Flight</h3>
        <table border="1" cellPadding="10" style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Flight No</th>
              <th>From</th>
              <th>To</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI-101</td>
              <td>Delhi</td>
              <td>Mumbai</td>
              <td>06:00 AM</td>
              <td>08:00 AM</td>
              <td>₹5,500</td>
              <td><button onClick={() => this.bookTicket('AI-101')}>Book</button></td>
            </tr>
            <tr>
              <td>AI-202</td>
              <td>Chennai</td>
              <td>Kolkata</td>
              <td>09:00 AM</td>
              <td>11:30 AM</td>
              <td>₹6,200</td>
              <td><button onClick={() => this.bookTicket('AI-202')}>Book</button></td>
            </tr>
            <tr>
              <td>AI-303</td>
              <td>Bangalore</td>
              <td>Hyderabad</td>
              <td>12:00 PM</td>
              <td>01:15 PM</td>
              <td>₹3,800</td>
              <td><button onClick={() => this.bookTicket('AI-303')}>Book</button></td>
            </tr>
          </tbody>
        </table>
        {this.state.bookedFlight && (
          <p><strong>Last booked: {this.state.bookedFlight}</strong></p>
        )}
      </div>
    );
  }
}

export default UserPage;
