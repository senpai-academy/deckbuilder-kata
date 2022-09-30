import React from "react";
import CardType from "../CardType/CardType";
import AttackScore from "../attack/AttackScore";
import DefenseScore from "../Defense/DefenseScore";

const Stats = (props) => {
    return(
        <div className="stats">
            <CardType Type={props.card.cardType}/>
            <div className="doscol">
                <div>
                    <img src="/Sprites/Icons/Attack.png" alt="" className="imgType"/>
                </div>
                <AttackScore AttackScore={props.card.attackScore}/>
            </div>
            <div className="doscol">
                <div>
                    <img src="/Sprites/Icons/Defense.png" alt="" className="imgType"/>
                </div>
                <div>
                    <DefenseScore DefenseScore={props.card.defenseScore}/>
                </div>
            </div>
        </div>
        )
}

export default Stats;