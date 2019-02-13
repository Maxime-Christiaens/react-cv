import React, { Component } from 'react';

export default class Badgr extends Component {

    render() {
        return (
            <div className="badgr">
                <a className="flex-column-center" href="https://badgr.io/public/assertions/1nhvHBZNRFCnp6UjB7wD_g" rel="noopener noreferrer" target="_blank" >
                    <i class={ this.props.i }></i>
                    <p>{ this.props.p }</p>
                </a>
            </div>
        );
    }
}
