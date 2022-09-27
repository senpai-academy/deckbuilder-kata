import React from "react";
import mana from "../../assets/Icons/Mana.png"

const SimpleCard = (props) =>{
    
    props.takePopup (
        console.log("POPUP"),
        popup()
        
    )

    function popup() {
        return () => {
                console.log(props)          
        }
    }

    return(
            <div className="simpleCard" onClick={props.takePopup}>
                <div className="imgMana">
                    <img className="mana" src={mana} alt="peque"/> 
                    <span className="cost">{props.card.cost}</span>
                </div>
                <div className="cardName">{props.card.name}</div>
            </div>
    )
}
export default SimpleCard;

