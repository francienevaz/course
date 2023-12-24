import React from "react";

// importante: quando criamos listas é necessário passar uma chave, para evitar o error quando renderizar a aplicação, no exemplo abaixo passamos o index como parâmetro e passamos esse index como key

function Menu(props) {
    const listLinks = props.links.map((link, index) => <li key={index}>{link}</li>)
    return (
        <ul className="menu">
            {listLinks}
        </ul>
    )
}

export default Menu;