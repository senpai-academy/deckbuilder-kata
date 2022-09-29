import React from "react";

const DeckCard = (props)=>{
    return(
        <div className="modal">
            <div className="titleContainer">
                <img className="imgTitle" src={"Sprites/Panels/Title.png"}/>
                <span className="textTitle">{props.card.name}</span>
            </div>
            
        </div>
    )
}

export default DeckCard;