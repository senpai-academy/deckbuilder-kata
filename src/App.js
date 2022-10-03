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

  const selectCard = (id) => {
    let card = cards[id]
    setSelectedCard(card)
    console.log(card)
  }

  return (
    <div className='contenedor'>
      {
      selectedCard != null && <PopUp card={selectedCard}/>
      }
      <CardBank Cardlist={cards} selectCard={selectCard}/>
      <DeckGrid/>
      <DeckInfo/>
    </div>
  )
}
export default App;





