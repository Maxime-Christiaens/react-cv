import React, { Component } from 'react';

export default class Product extends Component {
    //créer une fonction récupérer les produites 
    render() {
      return (
        <li>
            <h6 className={ this.props.name }></h6>
            <p>{ "Commandes = "+this.props.commandesTotal }</p>
        </li>
      );
    }
  }