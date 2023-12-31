import React, { useEffect, useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(()=>{
        const storeCount = localStorage.getItem("count");
        return storeCount ? parseInt(storeCount) : props.count;
    });

    useEffect(()=>{
        document.title = count;
        localStorage.setItem("count", count.toString());
    }, [count])

    function add(){
        setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default Counter;