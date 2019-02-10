import React, { Component, Fragment } from 'react';
import Slide from './slide';

//création de l'objet H2
export default class FirstPage extends Component {
    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            FirstPageAnimation : "",
            Animation : "",
        };
    }
    //Animations de la page d'acceuil
    FirstPageOpening = () =>{
        this.setState({
            FirstPageAnimation : "opening"
        })
    }
    FirstPageClosing = () =>{
        this.setState({
            FirstPageAnimation : "closing"
        })
    }
    //Animation des slides
    //Rework Needed
    up1 = () => {
        this.setState({
            Animation : "up1",
        })
      }
    up2 = () => {
        this.setState({
            Animation : "up2",
        })
      }
    up3 = () => {
        this.setState({
            Animation : "up3",
        })
      }
    //Rework Needed
    down1 = () => {
        this.setState({
            Animation : "down1"
        })
    }
    down2 = () => {
        this.setState({
            Animation : "down2"
        })
    }
    down3 = () => {
        this.setState({
            Animation : "down3"
        })
    }
    
    render() {
        //FirstPageAnimation
        let FirstPage = "FirstPage "
        if(this.state.FirstPageAnimation == "opening"){
            FirstPage = "FirstPage opening"
        }
        else if (this.state.FirstPageAnimation == "closing"){
            FirstPage = "FirstPage closing"
        }
        //slideAnimation
        //Rework Nedeed
        let slideClass1 ="slide"
        let slideClass2 ="slide"
        let slideClass3 ="slide"
        if(this.state.Animation == "up1"){
            slideClass1 = "slide up"
        }
        else if(this.state.Animation == "up2"){
            slideClass2 = "slide up"
        }
        else if(this.state.Animation == "up3"){
            slideClass3 = "slide up"
        }
        else if (this.state.Animation == "down1"){
            slideClass1 = "slide down"
        }
        else if (this.state.Animation == "down2"){
            slideClass2 = "slide down"
        }
        else if (this.state.Animation == "down3"){
            slideClass3 = "slide down"
        }
        return (
            <Fragment>
            <div className={ FirstPage }>
                <h1>
                    { this.props.h1 /*h1 */ }
                </h1>
                <h2>
                    { this.props.h2 /*Mise en place d'un props qui h2 qui contiendra ce qu'on désire */ }
                </h2>
                <div className="button">
                    <button onClick={ () => { this.FirstPageOpening(); this.up1(); } }>Start1</button>
                    <button onClick={ () => { this.FirstPageOpening(); this.up2(); } }>Start2</button>
                    <button onClick={ () => { this.FirstPageOpening(); this.up3(); } }>Start3</button>
                </div>
                <p></p>
            </div>
            <Slide id="1" ClassName={ slideClass1 } onClick={ () => { this.FirstPageClosing(); this.down1()} } h2="hello billy1" />
            <Slide id="2" ClassName={ slideClass2 } onClick={ () => { this.FirstPageClosing(); this.down2()} } h2="hello billy2" />
            <Slide id="3" ClassName={ slideClass3 } onClick={ () => { this.FirstPageClosing(); this.down3()} } h2="hello billy3" />
            </Fragment>
        );
    }
}
