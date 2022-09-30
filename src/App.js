
import './App.css';
import { CardGenerator } from './Services/CardGenerator';
import Panel from './components/panel';
import { useEffect, useState } from 'react';
import {CardsPanel} from './Cards/Cards';
import {CardBank} from './components/cardBank'
import Modal from "./components/modal"


function App() {

  const [state,setState] = useState({
    cards: null,
    selectedCard:null,
    myCards:[],
  })
  const [IdTemporal, setIdTemporal] = useState("")

  useEffect(()=>{
    const cardsQuantity = 50;
    let tempCards = []
    for (let i = 0; i < cardsQuantity; i++) {
      const card = new CardGenerator().generateCard()
      tempCards.push(card);
    }
    setState({...state, cards: tempCards})
  },[])

  const selectCard = (id) =>{
    setIdTemporal(id)
    setState({...state, selectedCard: state.cards[id]})
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
          cards={state.myCards}/>}
 
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
