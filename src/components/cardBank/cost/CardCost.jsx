import React from "react";

const CardCost = (props) => {
    return(
            <div className={props.className}> 
                {props.cost}
            </div>
    )
}

export default CardCost;