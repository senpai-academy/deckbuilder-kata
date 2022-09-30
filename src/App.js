import './App.css';
import React from 'react';
import CardBank from './COMPONENTS/Bank/CardBank';
import CardPopup from './COMPONENTS/CardPopup/CardPopup';
import { useState } from "react";
import { useEffect } from "react";
import { CardGenerator } from './Services/CardGenerator';
import DeckGrid from './COMPONENTS/DeckGrid/DeckGrid';


function App(props) {
  
  const [cardList, setCardList] = useState([])
  const [cardToShow, setCardToShow] = useState(null)
  const [getCard, setGetCard] = useState([])
  //const [aux, setAux] = useState([])
  
  /*const [cardsInDeck, setCardsInDeck] = useState([])*/
    
  /*console.log(getCard)*/

    /*useEffect(()=>{
      let cardsToDeck = []
      setCardsInDeck(...cardsInDeck, getCard)
    },[])*/

    useEffect(()=>{
        let cards = []
        for(let i = 0; i<=25; i++){
            const card = new CardGenerator().generateCard();
            cards.push(card)
        } 
        setCardList(cards)
      },[])
    
    /*useEffect(()=>{
      cont++
      console.log(cont)
    },[getCard])*/

    function addToDeck(card){
      //setAux([...aux, card])
      setGetCard([...getCard, card])
      setCardToShow(null)
      deleteCardFromBank(card)
      console.log(getCard)
    }

    function deleteCardFromBank(card){
      let reducedList = []
      reducedList = cardList.filter(element => element != card)
      setCardList(reducedList)
    }

    function cancel(){
      setCardToShow(null)
    }

    function backToBank(card){
       setCardList([...cardList, card])
       renderBank(card)
       console.log("dale")
    }

    function renderBank(card){
      let reducedList = []
      reducedList = getCard.filter(element => element != card)
      setGetCard(reducedList)
    }



  return (

    <body>

      <div className='costName'>  
        <CardBank
        card={cardList}
        selectCard={setCardToShow}/>
      </div>
      <div className='modalContainer'>
        {
          cardToShow != null && <CardPopup card={cardToShow}
                                           getCard={addToDeck}
                                           cancel={cancel}/>
        }
      </div>

        <DeckGrid
        cardsInDeck={getCard}
        backToBank={backToBank}
        />

      <div className='deckInfo'>

      </div>

    </body>

  );
}

export default App;
