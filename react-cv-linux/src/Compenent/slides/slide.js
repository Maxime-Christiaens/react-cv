import React, { Component } from 'react';

export default class Slide extends Component{

    render() {
        return (
          <section className={ this.props.ClassName }>
            <h2>
                {this.props.h2}
            </h2>
            <i className="far fa-times-circle" onClick={ this.props.onClick }></i>
          </section>
        );
      }
}