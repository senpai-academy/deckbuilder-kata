import logo from './logo.svg';
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/Panel';
import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import Main from './components/Main';


function App() {
 /* let cards = []
    for (let i=0;i<10;i++) {
    const card = new CardGenerator().generateCard(); 
    cards.push(card)
  }
  console.log(cards)*/
  // const card = new CardGenerator().generateCard();
  
  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
  })

  useEffect(()=>{
    const cardsQuantity = 7;
    let tempCards = []
    for (let i = 0; i < cardsQuantity; i++) {
      const card = new CardGenerator().generateCard()
      tempCards.push(card);
    }
    setState({...state, cards: tempCards})
    console.log(state.cards)
  },[])

  return (
    <>
    <div className="container">
      <CardsPanel
      myCards={state.cards}/>
      <Main/>
    </div>
    
    </>
  );
}

export default App;

