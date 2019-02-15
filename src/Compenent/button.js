import React, { Component } from 'react';

export default class Button extends Component{

    render() {
        return (
            <div className = "buttons">
                <h6> {this.props.texte } </h6>
                <i className={ "pointer "+(this.props.icone) } onClick={ this.props.onClick }></i>
            </div> 
        );
      }
}