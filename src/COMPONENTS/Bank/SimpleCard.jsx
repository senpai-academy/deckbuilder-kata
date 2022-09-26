import React from "react";
import mana from "../../assets/Icons/Mana.png"

const SimpleCard = (props) =>{
    
    return(
            <div className="simpleCard">
                <div className="imgMana">
                    <img className="mana" src={mana} alt="peque"/> 
                    <span className="cost">{props.cost}</span>
                </div>
                <div className="cardName">{props.name}</div>
            </div>
    )
}
export default SimpleCard;