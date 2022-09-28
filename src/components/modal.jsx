import React from "react";
import { Loading } from "./Lib";
const Modal = ({data}) =>{
    console.log({data})
    return (
         <div id="modal">
            <div className="modalBox">
                <div className="card-container-modal">
                    <div className="card-title">
                        <div className='relative'>
                            <span className='numero'>{data.cost}</span>
                            <div className='img-mana'></div>
                        </div>   
                        <span className="text-title">{data.name}</span>
                    </div>
                    <div className="card-img">
                        <img src={`/Sprites/CardArt/${data.art}`} alt={data.name}/>
                    </div>
                    <div className="div-card-details">
                        <div className="card-details">
                            <span className="description-Card">{data.description}</span>
                        </div>
                        <div className="card-details">
                            <img alt="a" className={"icon-details "+(data.rarity.value)} height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} />
                            <span><img alt="b" className="icon-details" height={'30px'} src={`/Sprites/Icons/Attack.png`} />{data.attackScore}</span>
                            <span><img alt="c" className="icon-details" height={'30px'} src={`/Sprites/Icons/Defense.png`} />{data.defenseScore}</span>
                        </div>
                    </div>
                    <div className="button-footer">
                        <div className="aceptar-carta" img src="/Sprites/Panels/Button.png"/>
                        <div className="rechazar-carta" img src="/Sprites/Panels/Button.png"/>
                    </div>
                </div>
            </div>
         </div>
    )
}
export default Modal