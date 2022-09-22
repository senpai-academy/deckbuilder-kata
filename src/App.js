import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

function App() {

  const card = new CardGenerator().generateCard();
  console.log(card)
  return (
    <div id="GridMain">
        <div id="DeckGrid" className="backGround">a</div>
        <div id="CardBank" className="backGround">b</div>
        <div id="DeckInfo" className="backGround">c</div>
    </div>
  );
}

export default App;
