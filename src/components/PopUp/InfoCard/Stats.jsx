import React from "react";
import CardType from "../CardType/CardType";

const Stats = (props) => {
    return(
        <div className="stats">
            <CardType Type={props.card.cardType}/>
            <div>2</div>
            <div>3</div>
        </div>
        )
}

export default Stats;