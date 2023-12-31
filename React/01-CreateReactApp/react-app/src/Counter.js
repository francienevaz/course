import React, { useEffect, useState } from "react";

function Counter(props) {
    const [count, setCount] = useState(()=>{
        const storeCount = localStorage.getItem("count");
        return storeCount ? parseInt(storeCount) : props.count;
    });

    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")));

        //O que estiver dentro da função de retorno será executado quando o componente for desmontado, servindo como o equivalente ao componentWillUnmount para realizar limpeza de recursos ou interromper certas operações antes que o componente seja removido do DOM.
        
        return()=>{
            console.log("Não tem mais contador")
        }
    }, [])


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