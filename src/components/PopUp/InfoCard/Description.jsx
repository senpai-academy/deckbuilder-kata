import React from "react";

const Description = (props) => {
    return(
        <div className={props.className} >
            <div className="controltxt">
                {props.card.description}
            </div>
        </div>
        )
}

export default Description;