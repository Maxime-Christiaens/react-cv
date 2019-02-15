import React, { Component } from 'react';

export default class Techno extends Component {
    render() {
        return (
            <div className="techno">
                <a className="flex-column-center" href={ this.props.link } rel="noopener noreferrer" target="_blank" >
                    <i class={ this.props.i }></i>
                    <p>{ this.props.p }</p>
                </a>
            </div>
        );
    }
}