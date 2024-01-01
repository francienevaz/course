import React, { useState } from "react";
import './Todo.css'


function Todo(){

    const [text, setText] = useState('');

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    return(
        <div className="container">
            <h1>Hello World</h1>
            <form>
                <input onChange={handleChange} type="text"></input>
                <button type="button">Add Task</button>
                <ul>
                    <li>{text}</li>
                </ul>
            </form>
        </div>
    )
}

export default Todo