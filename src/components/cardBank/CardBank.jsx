import React from "react";
import { Card } from "../../Services/Card";
import CardName from "./name/CardName";
import CardCost from "./cost/CardCost";

const CardBank = (card)=>{
    return(
        <>
        <main>
            <CardName
                name={card.name}
            />
            <CardCost 
                cost={card.cost}
            />
        </main>
        </>
    )
}

export default CardBank;