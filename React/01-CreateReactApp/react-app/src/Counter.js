import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {count: 0}
        this.add = this.add.bind(this)
    }

    add(){
        // this.setState({count: this.state.count + 1})
        this.setState((state)=>{ return {count: state.count + 1}}, ()=>{
            console.log(this.state)
            //setando o state no localStorage
            localStorage.setItem("state", JSON.stringify(this.state))
        })
    }

    // componentdDidMount sera executado depois que o componente for renderizado na tela

    componentDidMount(){
        // renderizando o valor salvo no localStorage
        this.setState(JSON.parse(localStorage.getItem("state")))
    }

    // Toda vez que mudamos o state o componente sera atualizado, a nao ser que chamemos a funcao shouldComponentUpdate() retornando o valor "false"
    // shouldComponentUpdate(){
    //     return false;
    // }

    //Esse metodo sera chamado sempre que o componente for removido dsa tela
    componentWillUnmount(){
        
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default Counter;