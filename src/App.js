
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import {CardBank} from './components/cardBank'

function App() {

  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
  })

  useEffect(()=>{
    const cardsQuantity = 50;
    let tempCards = []
    for (let i = 0; i < cardsQuantity; i++) {
      const card = new CardGenerator().generateCard()
      tempCards.push(card);
    }
    setState({...state, cards: tempCards})
    console.log(state.cards)
  },[])


  return (


    <div id="GridMain">
        <div id="DeckGrid" className="backGround">
            
             <CardsPanel
              myCards={state.cards}/>
  
        </div>
        <div id="CardBank" className="backGround">
              <CardBank
              myCards={state.cards}/>   
        </div>
        <div id="DeckInfo" className="backGround">c</div>
    </div> 
  );
}

export default App;
