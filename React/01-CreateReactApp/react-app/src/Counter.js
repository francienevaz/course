import React, { useEffect, useState } from "react";

// useState é um hook, assim como useEffect
function Counter(props) {
    const [count, setCount] = useState(props.count);

    // Irá executar apenas uma vez, por causa do [], no fim
    // o useEffect vai ser chamado quando o componente for criado, o equivalente ao didMount, e toda a vez que componente for atualizado o equivalente ao didUpdate

    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")))
    }, [])

    // se nenhuma variável for setada para que o useEffect fique monitorando, qualquer estado quando atualizado irá executar a função, se setar a variável que deve ser monitorada, somente ela irá executar a função. 
    // useEffect(()=>{
    //     document.title = count
    //     localStorage.setItem("count", count)
    // }, [count]) => count está sendo observada
    useEffect(()=>{
        document.title = count;
        localStorage.setItem("count", count);
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

// class Counter extends React.Component{

//     constructor(props){
//         super(props);

//         this.state = {count: 0}
//         this.add = this.add.bind(this)
//     }

//     add(){
//         // this.setState({count: this.state.count + 1})
//         this.setState((state)=>{ return {count: state.count + 1}}, ()=>{
//             console.log(this.state)
//             //setando o state no localStorage
//             localStorage.setItem("state", JSON.stringify(this.state))
//         })
//     }

//     // componentdDidMount sera executado depois que o componente for renderizado na tela

//     componentDidMount(){
//         // renderizando o valor salvo no localStorage
//         document.title = this.state.count;
//         this.setState(JSON.parse(localStorage.getItem("state")))
//     }

//     componentDidUpdate(){
//         // salvando o novo estado no localStorage a cada atualização do componente
//         document.title = this.state.count;
//         localStorage.setItem("state", JSON.stringify(this.state))
//     }
//     // Toda vez que mudamos o state o componente sera atualizado, a nao ser que chamemos a funcao shouldComponentUpdate() retornando o valor "false"
//     // shouldComponentUpdate(){
//     //     return false;
//     // }

//     //Esse metodo sera chamado sempre que o componente for removido dsa tela
//     componentWillUnmount(){
        
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Counter: {this.state.count}</h1>
//                 <button onClick={this.add}>Add</button>
//             </div>
//         )
//     }
// }

export default Counter;