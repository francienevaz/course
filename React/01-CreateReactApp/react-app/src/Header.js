import React from 'react';
import './App.css';

// nesse exemploa abaixo o Header é um componente
// as props - propriedades servem para facilitar a reutilização de componentes, trocando somente o valor da propriedade.

function Header(props) {
    return (
        <header className="header">
        <h1>{props.name}</h1>
        <ul className="menu">
            <li>{props.links[0]}</li>
            <li>{props.links[1]}</li>
            <li>{props.links[2]}</li>
        </ul>
        </header>
    )
}

export default Header