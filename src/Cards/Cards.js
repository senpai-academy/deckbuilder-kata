import React from "react";
import { Loading } from "../COMPONENTS/Lib";

const CardsPanel = ({myCards}) => {

    return(
        (myCards) ?
        <div className="panel panel-left">
            {myCards.map((card, index) => {
                <p key={index}>{card.name}</p>
            })}
        </div> : <Loading/>
    )
}

export default CardsPanel;