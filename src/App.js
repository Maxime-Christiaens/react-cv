import React, { Component } from 'react';
import FirstPage from './Compenent/FirstPage';
import './styles/App.css';


export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FirstPage h1="Maxime Christiaens" h2="Web Developer Junior"/>
        </header>
      </div>
    );
  }
}

