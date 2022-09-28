import React from "react";
import { Loading } from "./Lib";
const Modal = ({data}) =>{
    console.log({data})
    return (
       
         <div id="modal">
                <div className="card-containerModal">
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
                    <div className="div-carddetails">
                        <div className="card-details">
                            <spam className="description-Card">{data.description}</spam>
                        </div>
                        <div className="card-details">
                            <img alt="a" className="icon-details" height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} />
                            <span><img alt="b" className="icon-details" height={'30px'} src={`/Sprites/Icons/Attack.png`} />{data.attackScore}</span>
                            <span><img alt="c" className="icon-details" height={'30px'} src={`/Sprites/Icons/Defense.png`} />{data.defenseScore}</span>
                        </div>
                    </div>
                </div>
         </div>
    )
}
export default Modal