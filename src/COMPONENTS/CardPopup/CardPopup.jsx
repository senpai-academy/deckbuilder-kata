import React from "react";

const CardPopup = (props)=>{
    return(
        <div className="modal">
            <span>{props.card.name}</span>
            <div className="imgContainer">
                <img className="backgroundImg" src = {"Sprites/Panels/BackgroundMedium.png"}/>
                <img className="popupImg" src={`Sprites/CardArt/${props.card.art}`}/>
            </div>
            <div className="buttons">
                <img src={"Sprites/Panels/Button.png"}/>
                <img src={"Sprites/Panels/Button.png"}/>
            </div>
        </div>

    )     
}

export default CardPopup;