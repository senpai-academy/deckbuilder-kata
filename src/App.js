import './App.css';
import React from 'react';
import CardBank from './COMPONENTS/Bank/CardBank';
import CardPopup from './COMPONENTS/CardPopup/CardPopup';
import { useState } from "react";
import { useEffect } from "react";
import { CardGenerator } from './Services/CardGenerator';


function App(props) {

  const [cardList, setCardList] = useState([])
    
    

    useEffect(()=>{
        let cards = []
        for(let i = 0; i<=25; i++){
            const card = new CardGenerator().generateCard();
            cards.push(card)
        } 
        setCardList(cards)
      },[])
  
  /*const showPopup = ()=>{
    console.log("APP")
  }*/


  return (

    <body>

      <div className='costName'>
        <CardBank
        card={cardList}
        /*showPopup={showPopup}*//>
      </div>
      <div className='modalContainer'>
        <CardPopup/>
      </div>

    </body>

  );
}

export default App;
