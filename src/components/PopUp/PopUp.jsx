import React from "react";
import CardCost from "../cardBank/cost/CardCost";
import CardName from "../cardBank/name/CardName";
import Art from "./Art/Art";
import Stats from "./InfoCard/Stats";
import Description from "./InfoCard/Description";


const PopUp=(props)=>{
    return(
        <div id="modal">
            <div id="PopUpContainer"> {/*CONTENEDOR DEL POP UP*/}
                <div className="namecost"> {/*CONTENEDOR CON EL COSTO Y LA IMAGEN*/}
                        <CardCost cost={props.card.cost} className="PopUpCost"/>
                    
                        <CardName name={props.card.name} className="PopUpName"/>
                </div>


                <Art art={props.card.art} className="PopUpArt"/> {/*CONTENEDOR CON LA IMAGEN*/}

                
                    <div className="info">
                        <Description className="PopDescription" card={props.card}/>
                        <Stats card={props.card}/> {/*div con el segundo papiro */}      
                    </div>
                

                <div>
                    <div>
                        
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
     
    )
}
export default PopUp;