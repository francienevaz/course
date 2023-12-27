import './App.css';
import Header from './Header';
import Counter from './Counter'

function App() {
  return (
    <div>
      <Header name="Fran" links={["Sobre", "Comprar", "Contatos", "Login" ]}></Header>,
      <Counter count={4}></Counter>
    </div>
  );
}

export default App;
