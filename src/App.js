import './App.css';
import { useEffect, useState } from 'react';
import CardBank from './components/CardBank/CardBank';
import { CardGenerator } from './Services/CardGenerator';
import React from 'react';
import PopUp from './components/PopUp/PopUp';
import DeckGrid from './components/DeckGrid/DeckGrid';
import DeckInfo from './components/DeckInfo/DeckInfo';

function App  ()  {
  const cardsQuantity = 20;
  const [selectedCard, setSelectedCard] =useState(null)
  const [cards, setCards] = useState([])

  useEffect(()=>{
    let auxCards = []
    for (let i = 0; i < cardsQuantity; i++) {
    const card = new CardGenerator().generateCard();
    auxCards.push(card)
    }
    setCards(auxCards)
  },[])

  useEffect(()=>{
    setSelectedCard(cards[0])
  },[cards])

  return (
    <div className='contenedor'>
      <CardBank Cardlist={cards}/>
      <DeckGrid/>
      <DeckInfo/>
    </div>
  )
}
export default App;

/*{
  selectedCard != null && <PopUp card={selectedCard} />
}*/



