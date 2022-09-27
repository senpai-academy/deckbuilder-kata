import './App.css';
import { useEffect, useState } from 'react';
import CardBank from './components/cardBank/CardBank';
import { CardGenerator } from './Services/CardGenerator';
import React from 'react';

function App  ()  {
  let cards = []

  for (let i = 0; i < 27; i++) {
    const card = new CardGenerator().generateCard();
    cards.push(card)
  }
  console.log(cards)


 return (
  <>
  <div className='contenedor'>
  <div className='Cartas'>
    
  </div>
  <CardBank Cardlist={cards}/>
  </div>
  </>
)
}
export default App;
