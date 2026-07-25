import React, { Component } from 'react';

class GuestPage extends Component {
  render() {
    return (
      <div>
        <h2>Welcome, Guest!</h2>
        <h3>Available Flights</h3>
        <table border="1" cellPadding="10" style={{ margin: '0 auto' }}>
          <thead>
            <tr>
              <th>Flight No</th>
              <th>From</th>
              <th>To</th>
              <th>Departure</th>
              <th>Arrival</th>
              <th>Price</th>
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
            </tr>
            <tr>
              <td>AI-202</td>
              <td>Chennai</td>
              <td>Kolkata</td>
              <td>09:00 AM</td>
              <td>11:30 AM</td>
              <td>₹6,200</td>
            </tr>
            <tr>
              <td>AI-303</td>
              <td>Bangalore</td>
              <td>Hyderabad</td>
              <td>12:00 PM</td>
              <td>01:15 PM</td>
              <td>₹3,800</td>
            </tr>
          </tbody>
        </table>
        <p><em>Please login to book tickets.</em></p>
      </div>
    );
  }
}

export default GuestPage;
