import './App.css';
import Header from './Header';
import Counter from './Counter'
import { useEffect, useState } from 'react';

function App() {
  const [show, setShow] = useState(true)

  let time = 0;

  useEffect(()=>{
    let timer = setInterval(()=>{
      time++;
      console.log(time)
  
      if(time >= 5){
        clearInterval(timer); 
        setShow(false)
      }
    }, 1000)
  }, [])


  if (show){
    return (
    <div>
      <Header name="Fran" links={["Sobre", "Comprar", "Contatos", "Login" ]}></Header>,
      <Counter count={0}></Counter>
    </div>
  );
  } else {
    return (
      <div>
        <Header name="Fran" links={["Sobre", "Comprar", "Contatos", "Login" ]}></Header>,
        <h4>Sem contador</h4>
      </div>
    );
  }
  
}

export default App;
