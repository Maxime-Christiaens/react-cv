import React, { Component, Fragment } from 'react';
import FirstPage from './Compenent/FirstPage';
import Slide from './Compenent/slide';
import './App.css';


class App extends Component {
  
  render() {
    return (
      <Fragment>
      <div className="App">
        <header className="App-header">
        <FirstPage h1="Maxime Christiaens" h2="Web Developper Junior"/>
        </header>
      </div>
      <Slide h2="hello bitch" h3="yolo"/>
      <Slide h2="hello bitch2" h3="yolo2"/>
      </Fragment>
    );
  }
}

export default App;
