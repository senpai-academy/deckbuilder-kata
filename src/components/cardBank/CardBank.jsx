import React from "react";
import CardName from "./name/CardName";
import CardCost from "./cost/CardCost";

const CardBank = (props)=>{
    return(
        <>
            <div className="cardBankContainer">
                <div className="cardBankList">
                    {props.Cardlist.map((Card,key) => {
                    return(
                        <div key={key} onclick={() => props.selectCard(key)} className="listItem" >
                                <CardCost cost={Card.cost} className="cardBankCost"/>
                                <CardName name={Card.name} className="cardBankName" />                        
                        </div>
                    )
                })}
                   
                </div>
            </div>
        </>
    )
}

export default CardBank;