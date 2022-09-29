import React from "react";

const Description = (props) => {
    return(
        <div className={props.className}>
            {props.card.description}
        </div>
        )
}

export default Description;