import React from "react";
import SimpleCard from "./SimpleCard"

const CardBank =(props)=>{

    /*props.showPopup(
        takePopup()
    )
    
    function takePopup() {
        return () => {
            console.log("CARD BANK");
        };
    }*/
    return(
        <ul>
            {
                props.card.map((card, index) => <SimpleCard
                card={card}
                key={`${card.name}-${card.cost}`}
                /*takePopup={takePopup}*/
                />)
            }
        </ul>
    );

    
}
export default CardBank;
