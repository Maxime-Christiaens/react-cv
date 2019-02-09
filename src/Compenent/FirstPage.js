import React, { Component } from 'react';

//création de l'objet H2
export default class FirstPage extends Component {
    render() {
        return (
            <div className="FirstPage">
                <h1>
                    { this.props.h1 /*h1 */ }
                </h1>
                <h2>
                    { this.props.h2 /*Mise en place d'un props qui h2 qui contiendra ce qu'on désire */ }
                </h2>
            </div>
        );
    }
}
