import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/panel';
import { useState } from 'react';

function App() {
  /*const [cards,setCards] = useState([])
  const builder = ()=>{
    for (let i=0;i<10;i++) {
    const card = new CardGenerator().generateCard(); 
    setCards(card)
  }}
  console.log(cards)*/
  // const card = new CardGenerator().generateCard();
  
  
  return (

    <div className="App">
        {/*<img src={`./Sprites/CardArt/${card.art}`}/> */}
        <Panel></Panel>
    </div>
  );
}

export default App;

