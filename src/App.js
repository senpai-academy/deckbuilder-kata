import "./App.css";
import { CardGenerator } from "./Services/CardGenerator";
import { useEffect, useState } from "react";
import { CardList, CardsPanel } from "./Cards/Cards";
import Modal from "./components/displayCard";
// import Modal from "./components/displayCard"; //

function App() {
  const [state, setState] = useState({
    cards: null,
    selectedCard:  new CardGenerator().generateCard(),
    modalOpen: false,
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

  const selectCard = (idx) => {
    console.log(idx);
    setState({ ...state, selectedCard: state.cards[idx], modalOpen: true });
  };

  return (
    <>
      <div className="container">
        {/*<CardsPanel myCards={state.cards}
       selectedCard={state.selectedCard}
        />
        <CardList myCards={state.cards}
  selectAction={selectCard}*/}
        {state.selectedCard && 
        <Modal 
        card={state.selectedCard} 
        />}
      </div>
    </>
  );
}

export default App;
