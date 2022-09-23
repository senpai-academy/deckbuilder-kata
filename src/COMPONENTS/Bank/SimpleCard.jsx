import React from "react";
import mana from "../../assets/Icons/Mana.png"

const SimpleCard = (props) =>{
    
    return(
            <div>
                <img className="mana" src={mana} alt="peque"/>
                <span>{props.cost}</span>
                <span>{props.name}</span>
            </div>
    )
}
export default SimpleCard;