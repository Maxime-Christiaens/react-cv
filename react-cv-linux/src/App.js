import React, { Component } from 'react';
import FirstPage from './Compenent/FirstPage';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FirstPage h1="Maxime Christiaens" h2="Web Developper Junior"/>
        </header>
      </div>
    );
  }
}

export default App;
