import React from "react";
import CardCost from "../cardBank/cost/CardCost";
import CardName from "../cardBank/name/CardName";


const PopUp=(props)=>{
    return(
        <div id="PopUpContainer">
            <div> 
                <div>
                    <CardCost cost={props.card.cost}/>
                </div>

                <div >
                    <CardName name={props.card.name}/>
                </div> 
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