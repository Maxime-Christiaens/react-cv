import React, { Component, Fragment } from 'react';
import Slide from './slides/slide';
import Formation from './slides/formations';
import Experience from './slides/experiences';
import Badge from './slides/badges';
import Button from './button';
import Technologie from './slides/Technologies';

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
            id : ""
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
    up = () => {
        this.setState({
            Animation : "up",
        })
      }

    down = () => {
        this.setState({
            Animation : "down"
        })
    }
    //the id
    id = (e) => {
        this.setState({
            id : e
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

        let slideClass ="slide"
        if(this.state.Animation == "up"){
            slideClass = "slide up"
        }
        else if (this.state.Animation == "down"){
            slideClass = "slide down"
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
                { /*Buttons permettant de changer de page */}
                <div className="flex-row-center">
                    <Button texte="Formations" icone="far fa-arrow-alt-circle-down" onClick={ () => { this.FirstPageOpening(); this.up(); this.id(1) } }/>
                    <Button texte="Expériences" icone="far fa-arrow-alt-circle-down" onClick={ () => { this.FirstPageOpening(); this.up(); this.id(2) } }/> 
                    <Button texte="Technologies" icone="far fa-arrow-alt-circle-down" onClick={ () => { this.FirstPageOpening(); this.up(); this.id(3) /*Cette methode me permet de récupérer un "id" me permettant par la suite d'activer le slide correspondant */ } }/>
                </div>  
            </div>
            <Slide ClassName={ this.state.id=="1"?slideClass:"" /* La récupération de l'id me permet de choisir lequelle des slides doit être activer */} onClick={ () => { this.FirstPageClosing(); this.down()} } h2="Formations"  content={ <Formation/> } />
            <Slide ClassName={ this.state.id=="2"?slideClass:"" } onClick={ () => { this.FirstPageClosing(); this.down() } } h2="Expériences" content={ <Experience/> } />
            <Slide ClassName={ this.state.id=="3"?slideClass:"" } onClick={ () => { this.FirstPageClosing(); this.down() } } h2="Technologies" content={ <Technologie/> }/>
            </Fragment>
        );
    }
}