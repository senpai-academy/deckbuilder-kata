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
  
    function addToDeck(card){
      let aux = []
      aux.push(card)
      setGetCard(...getCard, aux)
    }

    console.log(getCard)


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
                                           getCard={addToDeck}/>
        }
      </div>

      <div className='deck'>
        <DeckGrid
        cardsInDeck={getCard}
        />
      </div>

      <div className='deckInfo'>
        <img className='fondoInfo' src={"Sprites/Panels/panel.png"}></img>
      </div>

    </body>

  );
}

export default App;
