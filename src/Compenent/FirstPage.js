import React, { Component } from 'react';

//création de l'objet H2
export default class FirstPage extends Component {
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            FirstPageAnimation : "nope"
        };
    }
    FirstPageAnimation = () =>{
        this.setState({
            FirstPageAnimation : "ouveture"
        })
    }
    FirstPageAnimationEnd = () =>{
        this.setState({
            FirstPageAnimation : "fermeture"
        })
    }
    render() {
        let firstPageClass = "FirstPage"
        if(this.state.FirstPageAnimation == "ouveture"){
            firstPageClass = "FirstPage ouverture"
        }
        else if (this.state.FirstPageAnimation == "fermeture") {
            firstPageClass = "FirstPage fermuture"
        }
        return (
            <div className={ firstPageClass }>
                <h1>
                    { this.props.h1 /*h1 */ }
                </h1>
                <h2>
                    { this.props.h2 /*Mise en place d'un props qui h2 qui contiendra ce qu'on désire */ }
                </h2>
                <div className="button">
                    <button onClick={ this.FirstPageAnimation }>Start</button>
                    <button onClick={ this.FirstPageAnimationEnd }>End</button>
                </div>
            </div>
        );
    }
}
