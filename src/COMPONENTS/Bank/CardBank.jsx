import React from "react";
import SimpleCard from "./SimpleCard"

const CardBank =(props)=>{

    return(
        <ul>
            {
                props.card.map((card, key) => 
                    <SimpleCard
                        card={card}
                        key={key}
                        selectCard={props.selectCard}
                />)
            }
        </ul>
    );

    
}
export default CardBank;
