import React from "react";

const CardCost = (props) => {
    return(
        <>
            <div className="cardBankCost"> 
                <span>{props.cost}</span>
            </div>
        </>
    )
}

export default CardCost;