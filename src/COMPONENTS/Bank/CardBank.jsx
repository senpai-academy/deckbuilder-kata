import React from "react";
import SimpleCard from "./SimpleCard"

const CardBank =(props)=>{

    props.showPopup(
        takePopup()
    )
    
    function takePopup() {
        return () => {
            console.log("CARD BANK");
        };
    }
    return(
        <ul>
            {
                props.card.map((card, key) => <SimpleCard
                key={key}
                card={card}
                takePopup={takePopup}
                />)
            }
        </ul>
    );

    
}
export default CardBank;
