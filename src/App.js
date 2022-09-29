import "./App.css";
import { CardGenerator } from "./Services/CardGenerator";
import { useEffect, useState } from "react";
import { CardList, CardsPanel } from "./Cards/Cards";
import Modal from "./components/displayCard";
// import Modal from "./components/displayCard"; //

function App() {

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

  const selectCard = (idx) =>{
    console.log(idx)
    setState({ ...state, selectedCard: state.cards[idx] });
  }

  return (
    <>
      <div className="container">
      {/*<CardsPanel myCards={state.cards}
       selectedCard={state.selectedCard}
        />
        <CardList myCards={state.cards}
  selectAction={selectCard}*/}
  
  <Modal 
  myCards={state.cards}
  />
      </div>
    </>
  );
}

export default App;
