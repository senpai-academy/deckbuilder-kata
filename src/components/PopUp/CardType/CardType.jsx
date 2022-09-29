import React from "react";

const CardType = (props) => {
    return(
        
            <div className={props.className}> 
                <img src={"/Sprites/Icon/" + props.rarity} alt=""/>
            </div>
    )
}

export default CardType;