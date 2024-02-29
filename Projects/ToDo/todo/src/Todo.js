import React, { useState } from "react";
import './Todo.css'


function Todo(){

    const [text, setText] = useState('');
    const  [items, setItems] = useState([]);

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event){
        event.preventDefault();
        if(text) {
            setItems([...items, text]);
            setText("");
        }
    }

    return(
        <div className="container">
            <h1>Hello World</h1>
            <form>
                <input onChange={handleChange} type="text" value={text}></input>
                <button onClick={addItem} type="button">Add Task</button>
                <ul>
                    {items.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </form>
        </div>
    )
}

export default Todo