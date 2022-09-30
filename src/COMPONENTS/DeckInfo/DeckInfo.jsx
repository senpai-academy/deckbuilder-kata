import React from "react";

const DeckInfo = (props)=>{
    return(
        <div className='deckInfo'>
            <div>
                <span>{props.getInfo.length}/12</span>
            </div>
            
            <div className="troopClass">
                <div>
                    <img src={`Sprites/Panels/Attack.png`} alt="" />
                    <span>Nº</span>
                </div>

                <div>
                    <img src={`Sprites/Panels/Defense.png`} alt="" />
                    <span>Nº</span>
                </div>

                <div>
                    <img src={`Sprites/Panels/Attack.png`} alt="" />
                    <span>Nº</span>
                </div>           
            </div>

            <div>
                <span>NUMERO</span>
            </div>
        </div>
    )
}

export default DeckInfo;