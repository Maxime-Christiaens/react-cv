import React, { Component } from 'react';
import H2 from './Compenent/H2';
import './App.css';


class App extends Component {
  
  render() {
    function Welcome(props,s2="Kazar") {
      return <h1>Hello, {props} { s2 } </h1>;
    }
    let a = <a href="http://www.jeuxvideo.com/"></a>
    return (
      <div className="App">
        <header className="App-header">
          <p>
          { Welcome ("billy","12") }
            Edit <code>src/App.js</code>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
