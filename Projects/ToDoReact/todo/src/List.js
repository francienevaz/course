import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faR, faSquare, faCoffee, faSquareCheck, faTrashCan, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
library.add(faB, faR, faSquare, faS, faTrashCan, faSquareCheck, faCoffee, faWindowMaximize);

function Done(props) {
    if(props.done) {
        return (
            <FontAwesomeIcon icon={["fa-regular fa-square-check"]} />
        )
    } else {
       return (<FontAwesomeIcon icon={["fa-regular fa-square"]} />)
    }
}

function List(props) {

    return(
        <ul>
            {props.items.map(item => <li key={item.id}>
                    {item.text}
                    <button onClick={() => {}}><Done done={item.done}/></button>
                    <button onClick={() => { props.onItemDeleted(item) }}>
                        <FontAwesomeIcon icon ={["fas", "fa-trash-can"]} />
                    </button>
                </li>)}
        </ul>
    )
}

export default List;