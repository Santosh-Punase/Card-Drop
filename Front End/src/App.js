import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/LoginPage';
import Navbar from './pages/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar />
        <br/>
        <Login />
        <br/>
      </div>
    );
  }
}

export default App;
