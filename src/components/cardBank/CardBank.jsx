import React from "react";
import { Card } from "../../Services/Card";
import CardName from "./name/CardName";
import CardCost from "./cost/CardCost";

const CardBank = (card)=>{
    return(
        <>
            <div className="cardBankContainer">
                <div className="cardBankList">
                    <CardName
                        name={card.name}
                    />
                    <CardCost
                        cost={card.cost}
                    />
                </div>
            </div>
        </>
    )
}

export default CardBank;