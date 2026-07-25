import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  // Increment the counter value
  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  // Decrement the counter value
  decrement() {
    this.setState((prevState) => ({
      counter: prevState.counter - 1
    }));
  }

  // Say Hello with a static message
  sayHello() {
    this.setState({
      message: 'Hello! The counter has been incremented.'
    });
  }

  // Function that takes an argument
  sayWelcome(msg) {
    alert(msg);
  }

  // Synthetic event handler
  onPress(event) {
    alert('I was clicked');
  }

  // Increment button invokes multiple methods: increment + sayHello
  handleIncrement = () => {
    this.increment();
    this.sayHello();
  }

  render() {
    return (
      <div className="App">
        <h1>Event Examples App</h1>

        <hr />
        <h2>1. Counter with Multiple Method Invocation</h2>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{this.state.message}</p>

        <hr />
        <h2>2. Passing Arguments to Event Handlers</h2>
        <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>

        <hr />
        <h2>3. Synthetic Event</h2>
        <button onClick={this.onPress}>Click Me</button>

        <hr />
        <h2>4. Currency Convertor</h2>
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
