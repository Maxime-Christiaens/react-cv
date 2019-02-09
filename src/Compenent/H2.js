import React, { Component } from 'react';

//création de l'objet H2
class H2 extends Component {
    render(){
        function h2(h2="Web Developper Junior") {
            return <h2>Hello, {h2}</h2>;
        }
    }
}
//export l'objet H2
export default H2;