import React from "react";

const CardPopup = (props)=>{
    return(
        <div className="modal">
            <div className="titleContainer">
                <img className="imgTitle" src={"Sprites/Panels/Title.png"}/>
                <span className="textTitle">{props.card.name}</span>
            </div>
            
            <div className="imgContainer">
                <img className="backgroundImg" src = {"Sprites/Panels/BackgroundMedium.png"}/>
                <img className="popupImg" src={`Sprites/CardArt/${props.card.art}`}/>
            </div>
            <div className="buttons">
                <img src={"Sprites/Panels/Button.png"} onClick={()=>props.getCard(props.card)}/>
                <img src={"Sprites/Panels/Button.png"}/>
            </div>
        </div>

    )     
}

export default CardPopup;