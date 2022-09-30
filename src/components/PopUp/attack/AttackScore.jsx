import React from "react";

const AttackScore = (props) => {
    return(
        <div className={props.className} >
            <div >
                {props.card.AttackScore}
            </div>
        </div>
        )
}

export default AttackScore;