import React, { Component } from 'react';

export default class Formation extends Component {

    render() {
        return (
            <div className="formation">
                <div className="part1">
                    <h3>Web Developer Junior</h3>
                    <h4>Septembre 2018 - Mars 2019, <a href="https://becode.org/index_fr.html" rel="noopener noreferrer" target="_blank" class="black-text darken-3">Becode.org</a> à Charleroi</h4>
                    <h5>Formation centrée sur les technologies du web : Html, Css, JavaScript, PHP, Wordpress, Mysql & Frameworks : Bootstrap, ReactJS </h5>
                </div>
                <div className="flex-row-center part2">
                    <div className="flex-column-center">
                        <h3>Big Data Consultant</h3>
                        <h4>Décembre 2017, <a rel="noopener noreferrer" target="_blank" href="http://www.technofuturtic.be/">technofuturTIC</a> à Charleroi</h4>
                        <h5>Initiation à des méthodes d'analyse de données </h5>
                    </div>
                    <div className="flex-column-center">
                        <h3>Web Developer Junior</h3>
                        <h4>2015 - 2017, <a rel="noopener noreferrer" target="_blank" class="black-text" href="https://uclouvain.be/fr/index.html">UCLouvain</a> à Louvain-la-Neuve</h4>
                        <h5>Stage en recherche de 600 heures</h5>
                    </div>
                </div>
            </div>
        );
    }
}