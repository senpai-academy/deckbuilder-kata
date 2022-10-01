
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/panel';
import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import {CardBank} from './components/cardBank'
import Modal from "./components/modal"
import DeckInfo from './components/deckInfo';


function App() {

  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
    myCards:[],
  })
  const [IdTemporal, setIdTemporal] = useState("")

  useEffect(()=>{
    const cardsQuantity = 30;
    let tempCards = []
    for (let i = 0; i < cardsQuantity; i++) {
      const card = new CardGenerator().generateCard()
      tempCards.push(card);
    }
    setState({...state, cards: tempCards})
    console.log(state.card)
  },[])

  const selectCard = (id) =>{
    setIdTemporal(id)
    setState({...state, selectedCard: state.cards[id]})
  }
  const selectCardFromDeck = (id) =>{
    console.log(id)
    let tempMyCards2 = []
    Object.assign(tempMyCards2, state.myCards)
    tempMyCards2.splice(id,1)
    let tempDeckCards2 = state.cards
    tempDeckCards2.push(state.myCards[id])
    setState({myCards: tempMyCards2, cards: tempDeckCards2, selectedCard: null})
  }



  const acceptcard = ()=>{
    let tempDeckCards = []
    Object.assign(tempDeckCards, state.cards)
    tempDeckCards.splice(IdTemporal,1)
    let tempMyCards = state.myCards
    tempMyCards.push(state.cards[IdTemporal])
    console.log(tempDeckCards)
    setState({cards: tempDeckCards, myCards: tempMyCards, selectedCard: null})
    setIdTemporal(null)
  }

  const rechazarcard = ()=>{
    setState({...state, selectedCard: null})
    setIdTemporal(null)
  }
  return (
<>
    <div id="GridMain">
      {(!state.selectedCard) ? "" :
      <Modal 
      data={state.selectedCard} 
      aceptar={acceptcard}
      rechazar={rechazarcard}
      />}
        <div id="DeckGrid" className="backGround">
        {(!state.myCards) ? "" :
          <Panel
          props={state.myCards} select={selectCardFromDeck}/>}
 
        </div>
        <div id="CardBank" className="backGround">
              <CardBank
              myCards={state.cards} select={selectCard}/>   
        </div>
        <div id="DeckInfo" className="backGround">
          <DeckInfo
        myCards={state.myCards}/>
      </div>
    </div>
    </> 
  );
}

export default App;
