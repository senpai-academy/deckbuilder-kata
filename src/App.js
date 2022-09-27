import './App.css';
import { useEffect, useState } from 'react';
import CardBank from './components/cardBank/CardBank';
import { CardGenerator } from './Services/CardGenerator';
import React from 'react';
import PopUp from './components/PopUp/PopUp';

function App  ()  {

 
  const [selectedCard, setSelectedCard] =useState(null)
  const [cards, setCards] = useState([])

  useEffect(()=>{
    let auxCards = []
 for (let i = 0; i < 3; i++) {
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
    {
      selectedCard != null &&  <PopUp card={selectedCard}/>
    }
  
  <CardBank Cardlist={cards}/>
  </div>
)
}
export default App;
