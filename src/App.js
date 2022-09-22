import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

function App() {
  const card = new CardGenerator().generateCard();
  console.log(card)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
