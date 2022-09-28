import React from "react";
import CardCost from "../cardBank/cost/CardCost";
import CardName from "../cardBank/name/CardName";


const PopUp=(props)=>{
    return(
            <div id="PopUpContainer">
                <div className="namecost">
                        <CardCost cost={props.card.cost} />
                    
                        <CardName name={props.card.name} />
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