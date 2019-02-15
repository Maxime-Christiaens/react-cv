import React, { Component } from 'react';

export default class Client extends Component {
    //créer une fonction récupérer les produites 
    render() {
      return (
        <li>
            <h6 className={ this.props.name }></h6>
            <p> { this.props.commandesTotal }</p>
            
        </li>
      );
    }
  }