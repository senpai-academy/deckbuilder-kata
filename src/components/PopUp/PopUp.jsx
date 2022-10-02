import React from "react";
import CardCost from "../CardBank/cost/CardCost";
import CardName from "../CardBank/name/CardName";
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
                

                <div className="buttonpos">
                    <div>
                        <img src="/Sprites/Panels/ButtonGreen.png" className="buttonsize" alt=""/>
                    </div>
                    <div>
                        <img src="/Sprites/Panels/ButtonRed.png" className="buttonsize" alt=""/>
                    </div>
                </div>
            </div>
        </div>
     
    )
}
export default PopUp;