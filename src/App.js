import React, { Component } from 'react';
import './styles/App.css';
import UsersList from "./components/UsersList";

class App extends Component {
  render() {
    return (
      <div className='App'>
          <UsersList/>
      </div>
    );
  }
}

export default App;
