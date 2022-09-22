import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/Panel';

function App() {

  const card = new CardGenerator().generateCard();
  console.log(card)
  return (
    <div className="App">
        <img src={`./Sprites/CardArt/${card.art}`}/>
        <Panel></Panel>
    </div>
  );
}

export default App;
