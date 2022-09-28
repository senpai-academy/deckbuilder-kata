import './App.css';
import React from 'react';
import CardBank from './COMPONENTS/Bank/CardBank';
import CardPopup from './COMPONENTS/CardPopup/CardPopup';
import { useState } from "react";
import { useEffect } from "react";
import { CardGenerator } from './Services/CardGenerator';


function App(props) {

  const [cardList, setCardList] = useState([])
  const [cardToShow, setCardToShow] = useState(null)

    

    useEffect(()=>{
        let cards = []
        for(let i = 0; i<=25; i++){
            const card = new CardGenerator().generateCard();
            cards.push(card)
        } 
        setCardList(cards)
      },[])
  


  return (

    <body>

      <div className='costName'>
        <CardBank
        card={cardList}
        selectCard={setCardToShow}/>
      </div>
      <div className='modalContainer'>
        {
          cardToShow != null && <CardPopup card={cardToShow}/>
        }
        
      </div>

      <div className='deck'>
        <img src={"Sprites/Panels/panel.png"}></img>
      </div>

      <div className='deckInfo'>
        <img src={"Sprites/Panels/panel.png"}></img>
      </div>

    </body>

  );
}

export default App;
