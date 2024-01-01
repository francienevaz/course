import React from "react";
import './Todo.css'


function Todo(){

    return(
        <div className="container">
            <h1>Hello World</h1>
            <form>
                <input type="text"></input>
                <button type="button">Add Task</button>
            </form>
        </div>
    )
}

export default Todo