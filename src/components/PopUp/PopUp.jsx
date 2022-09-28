import React from "react";
import CardCost from "../cardBank/cost/CardCost";
import CardName from "../cardBank/name/CardName";


const PopUp=(props)=>{
    return(
            <div id="PopUpContainer">
                <div className="namecost">
                        <CardCost cost={props.card.cost} className="PopUpCost"/>
                    
                        <CardName name={props.card.name} className="PopUpName"/>
                </div>

                <div>

                </div>

                <div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <div></div>
                    <div></div>
                </div>

            </div>
     
    )
}
export default PopUp;