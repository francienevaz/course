import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faR, faSquare, faCoffee, faSquareCheck, faTrashCan, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
library.add(faB, faR, faSquare, faS, faTrashCan, faSquareCheck, faCoffee, faWindowMaximize);

function Done(props) {
    if(props.done) {
        return (
            <FontAwesomeIcon icon={faSquareCheck} />
        )
    } else {
       return (            
            <FontAwesomeIcon icon={faSquare} />            
        )
    }
}

function List(props) {

    return(
        <ul>
            {props.items.map(item => <li key={item.id}>
                   <Card className={item.done ? "done item" : "item"}>
                   {item.text}
                        <div className="btn">
                            <button onClick={() => { props.onDone(item)}}><Done done={item.done}/></button>
                            <button onClick={() => { props.onItemDeleted(item)}}>
                                <FontAwesomeIcon icon ={["fas", "fa-trash-can"]} />
                            </button>
                        </div>
                   </Card>
                </li>)}
        </ul>
    )
}

export default List;