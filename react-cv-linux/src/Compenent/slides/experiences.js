import React, { Component } from 'react';

export default class Experience extends Component {

    render() {
        return (
            <div className="formation">
                <div className="part1">
                    <h3>Vendeur de combustibles</h3>
                    <h4>Janvier 2018 - Mars 2018 <a class="black-text darken-3" href="https://becode.org/index_fr.html">Chauffage Demulier</a> à Manage</h4>
                    <h5>Service des clients</h5>
                    <h5>Encodage des commandes</h5>
                    <h5>Gestion de la caisse enregistreuse</h5>
                </div>
                <div className="part1">
                    <h3>Stage dans le domaine de la recherche</h3>
                    <h4>Février - Juin 2016 , <a href="https://uclep.be/" rel="noopener noreferrer" target="_blank" class="black-text">LEP</a></h4>
                    <h5>Assistance à la passation d'épreuves dans le cadre d'une recherche sur l'utilisation excessive des jeux vidéo</h5>
                    <h5>Revue de la littérature</h5>
                </div>
            </div>
        );
    }
}