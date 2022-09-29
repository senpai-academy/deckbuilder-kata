import React from "react";
import CardType from "../CardType/CardType";

const Stats = (props) => {
    return(
        <div className="stats">
            <CardType rarity={props.card.rarity}/>
            <div>2</div>
            <div>3</div>
        </div>
        )
}

export default Stats;