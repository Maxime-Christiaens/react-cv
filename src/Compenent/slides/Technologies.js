import React, { Component,Fragment } from 'react';
import Techno from './smallObject/techno';


export default class Technologie extends Component {

    render() {
        return (
            <Fragment>
                <div className="technologies">
                    <div className="row">
                        <div>
                            <Techno i="fab fa-html5" p="Html5" link="https://www.w3.org/TR/html52/"/>
                            <Techno i="fab fa-js" p="JavaScript" link="https://www.w3schools.com/js/"/>
                            <Techno i="fab fa-linux" p="Linux" link="https://fr.wikipedia.org/wiki/Linux"/> 
                        </div>
                        <div>
                            <Techno i="fab fa-css3-alt" p="CSS 3" link="https://www.w3schools.com/css/default.asp"/>
                            <Techno i="fab fa-php" p="PHP" link="http://php.net/"/>
                            <Techno i="fas fa-code-branch" p="Git" link="https://git-scm.com/"/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}