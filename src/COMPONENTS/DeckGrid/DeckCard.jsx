import React from "react";

const DeckCard = (props)=>{
    return(
        <div className="gridBackground" onClick={()=>props.backToBank(props.card)}>
            <div>
                <span>{props.card.name}</span>
            </div>
            <div>
                <img src={`Sprites/CardArt/${props.card.art}`} className="imgGrid"/>
            </div>
            <div className="backPergamino">
                <div className="imgType">
                    <img src={`Sprites/Panels/${props.card.cardType}.png`} color={props.card.rarity}/>
                </div>
                <div className="imgAttack">
                    <img src={`Sprites/Panels/Attack.png`}/>
                    <span>{props.card.attackScore}</span>
                </div>
                <div className="imgDefense">
                    <img src={`Sprites/Panels/Defense.png`}/>
                    <span>{props.card.defenseScore}</span>
                </div>
            </div>
            
        </div>
    )
}

export default DeckCard;

//para setear el color de las rarezas 
//filter: invert(94%) sepia(16%) saturate(4219%) hue-rotate(324deg) brightness(130%) contrast(91%);