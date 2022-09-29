import React from "react";

const DeckCard = (props)=>{
    return(
        <div>
            <div>
                <span className="white">{props.card.name}</span>
            </div>
            
        </div>
    )
}

export default DeckCard;