import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/panel';
import { useState } from 'react';

function App() {
  const [cards,setCards] = useState([new CardGenerator().generateCard(),new CardGenerator().generateCard()])
  // const card = new CardGenerator().generateCard();
  
  
  return (

    <div className="App">
        {/*<img src={`./Sprites/CardArt/${card.art}`}/> */}
        <Panel cards={cards}></Panel>
    </div>
  );
}

export default App;
