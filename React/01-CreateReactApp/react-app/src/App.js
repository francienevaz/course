import './App.css';
import Header from './Header';
import Counter from './Counter'

function App() {
  return (
    <div>
      <Header name="Fran" links={["Sobre", "Comprar", "Contatos", "Login" ]}></Header>,
      <Counter></Counter>
    </div>
  );
}

export default App;
