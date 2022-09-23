import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/panel';


function App() {
  let cards = []

    for (let i=0;i<10;i++) {
    const card = new CardGenerator().generateCard(); 
    cards.push(card)
  }
  console.log(cards)
  // const card = new CardGenerator().generateCard();
  
  
  return (

    <div className="App">
        {/*<img src={`./Sprites/CardArt/${card.art}`}/> */}
        <Panel cards={cards}></Panel>
    </div>
  );
}

export default App;

