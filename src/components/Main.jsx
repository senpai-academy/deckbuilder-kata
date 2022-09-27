import React from "react";
import { Loading } from "../components/Lib"

const CardList = ({myCards}) =>{
    return (
        (myCards) ?
        <div className="panel panel-right">
            {myCards.map((card, index) => (
                <Card idx={index} data={card}></Card>            
            ))}
        </div>: <Loading/>
    )
}




const Card = (props) => {
    return(
        <div className="panel panel-right"> 
        <div>
            <div className="card-cost">
                <img src={`/Sprites/Icons/Mana.png`}/>
                <span>{props.data.cost}</span>
                
            </div>
            <div className="card-name">
                <span>{props.data.name}</span>
            </div>
        </div>

        </div>
    )
}

export  {CardList,Card};
