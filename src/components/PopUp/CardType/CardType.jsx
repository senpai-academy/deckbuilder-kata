import React from "react";

const CardType = (props) => {
    return(
        
            <div className="centrado"> 
                <img src={"/Sprites/Icons/" + props.Type+".png"} alt="" className="imgType"/>
            </div>
    )
}

export default CardType;