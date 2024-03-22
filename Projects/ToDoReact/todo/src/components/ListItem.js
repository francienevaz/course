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

function ListItem(props) {

    return(
        <li>
                   <Card className={props.item.done ? "done item" : "item"}>
                   {props.item.text}
                        <div className="btn">
                            <button onClick={() => { props.onDone(props.item)}}><Done done={props.item.done}/></button>
                            <button onClick={() => { props.onItemDeleted(props.item)}}>
                                <FontAwesomeIcon icon ={["fas", "fa-trash-can"]} />
                            </button>
                        </div>
                   </Card>
        </li>
    )
}

export default ListItem;