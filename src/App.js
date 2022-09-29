
import './App.css';
import { CardGenerator } from './Services/CardGenerator';

import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import {CardBank} from './components/cardBank'
import Modal from "./components/modal"


function App() {

  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
    myCards:null,
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

  const selectCard = (id) =>{
    if (!id){
      return
    }
    setState({...state, selectedCard: state.cards[id]})
  }

  const acceptcard = ()=>{
    let tempDeckList = state.cards

    
    console.log("se acepto la carta")
    setState({...state, myCards: state.selectedCard})


    setState({...state, selectedCard: null})
    console.log("se limpio la carta seleccionada")
  }



  const rechazarcard = ()=>{
    console.log("se rechazo la carta")
    setState({...state, selectedCard: null})
  }



  return (
<>
    <div id="GridMain">
      {(!state.selectedCard) ? "No hay carta" :
      <Modal 
      data={state.selectedCard} 
      aceptar={acceptcard}
      rechazar={rechazarcard}
      />}
        <div id="DeckGrid" className="backGround">
        
        </div>
        <div id="CardBank" className="backGround">
              <CardBank
              myCards={state.cards} select={selectCard}/>   
        </div>
        <div id="DeckInfo" className="backGround">c</div>

    </div>
    </> 
  );
}

export default App;
