import React, { Component } from 'react';

export default class Slide extends Component{
    render() {
        return (
          <div className="slide">
            <h2>
                {this.props.h2}
            </h2>
            <h3>
                {this.props.h3}
            </h3>
          </div>
        );
      }
}