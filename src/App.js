import "./App.css";
import { CardGenerator } from "./Services/CardGenerator";
import { useEffect, useState } from "react";
import { CardsPanel } from "./Cards/Cards";
import {CardList} from "./components/Main";

function App() {
  /* let cards = []
    for (let i=0;i<10;i++) {
    const card = new CardGenerator().generateCard(); 
    cards.push(card)
  }
  console.log(cards)*/
  // const card = new CardGenerator().generateCard();

  const [state, setState] = useState({
    cards: null,
    selectedCard: null,
  });

  useEffect(() => {
    const cardsQuantity = 35;
    let tempCards = [];
    for (let i = 0; i < cardsQuantity; i++) {
      const card = new CardGenerator().generateCard();
      tempCards.push(card);
    }
    setState({ ...state, cards: tempCards });
    console.log(state.cards);
  }, []);

  return (
    <>
      <div className="container">
        <CardsPanel myCards={state.cards} />
        <CardList myCards={state.cards}/>
      </div>
    </>
  );
}

export default App;
