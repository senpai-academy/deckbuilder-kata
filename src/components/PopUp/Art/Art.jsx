import React from "react";

const Art = (props) => {
    return(
        
            <div className={props.className}> 
            
                <img src={"/Sprites/CardArt/" + props.art} alt="" className="PopUpImgSize"/>
            </div>
    )
}

export default Art;