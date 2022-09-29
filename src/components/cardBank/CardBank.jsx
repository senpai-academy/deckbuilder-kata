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
                        <React.Fragment key={key} >
                                <CardCost cost={Card.cost} className="cardBankCost"/>

                                <CardName name={Card.name}/>
                            
                        </React.Fragment>
                    )
                })}
                   
                </div>
            </div>
        </>
    )
}

export default CardBank;