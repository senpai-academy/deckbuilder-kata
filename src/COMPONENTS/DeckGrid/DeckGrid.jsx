import React from "react";
import DeckCard from "./DeckCard";

const DeckGrid = (props)=>{
    return(
        <div>
            {
                props.cardsInDeck.map((card, key) => 
                    <DeckCard
                        card={card}
                        key={key}
                />)
            }
        </div>        
    )

}

export default DeckGrid;