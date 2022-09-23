import React from "react";
import { useState } from "react";
import mana from "../../assets/Icons/Mana.png"

const SimpleCard = () =>{
    
    return(
            <div>
                <img className="mana" src={mana} alt="peque"/>
                <span>Enano tira flecha</span>
            </div>
    )
}
export default SimpleCard;