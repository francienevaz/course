import React from "react";

class Counter extends React.Component{
    render(){
        return(
            <div>
                <h1>Counter: 1</h1>
                <button onClick={()=>{console.log("clicked")}}>Add</button>
            </div>
        )
    }
}

export default Counter;