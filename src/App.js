
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import {CardBank} from './components/cardBank'
import Popup from './components/popup';

function App() {

  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
    modal:null,
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
      
        <Popup estado={state.modal}/>
        <div id="DeckGrid" className="backGround">
            
             <CardsPanel
              myCards={state.selectedCard}/>
  
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
