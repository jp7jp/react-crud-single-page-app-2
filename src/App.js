import React, { Component } from 'react';
import Routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h3 className="text-muted">React CRUD Single Page App</h3>
        </div>
        <Routes />
      </div>
    );
  }
}

export default App;
