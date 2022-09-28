import React from "react";

const CardName = (props) =>{
    return(
        <div className={props.className}>
            {props.name}
        </div>
    )
}
export default CardName;