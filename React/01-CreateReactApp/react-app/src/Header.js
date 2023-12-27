import React from 'react';
import Menu from './Menu';
import './App.css';

// nesse exemploa abaixo o Header é um componente
// as props - propriedades servem para facilitar a reutilização de componentes, trocando somente o valor da propriedade.

function Header(props) {
    return (
        <div>
            <header className="header">
            <h1>{props.name}</h1>
            <Menu links={props.links}></Menu>
            </header>
        </div>
    )
}

export default Header;