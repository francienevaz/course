import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faB, faR, faSquare, faPlus, faSquareCheck, faTrashCan, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
library.add(faB, faR, faSquare, faS, faTrashCan, faSquareCheck, faPlus, faWindowMaximize);

function TodoForm(props){
    const [text, setText] = useState("");

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if(text) {
            props.onAddItem(text);
            setText("");
        }
    }    
    
    return(

        <form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItem} type="submit"><FontAwesomeIcon icon={faPlus} /></button>
        </form>
    )
}

export default TodoForm;