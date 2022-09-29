import React from "react";

const Panel = (props) =>{
    return (
        
        <div className={"card-container-modal"}>
            {
                props.cards.map((card,key)=>{
                    return (
                        <div key={key}>
                            <div className="card-title">
                                <div className='relative'>
                                    <span className='numero'>{card.cost}</span>
                                    <div className='img-mana'></div>
                                </div>   
                                <span className="text-title">{card.name}</span>
                            </div>
                            <div className="card-img">
                                <img src={`/Sprites/CardArt/${card.art}`} alt={card.name}/>
                            </div>
                                <div className="card-details">
                                    <img alt="a" className={"icon-details "+(card.rarity.value)} height={'30px'} src={`/Sprites/Icons/${card.cardType}.png`} />
                                    <span><img alt="b" className="icon-details" height={'30px'} src={`/Sprites/Icons/Attack.png`} />{card.attackScore}</span>
                                    <span><img alt="c" className="icon-details" height={'30px'} src={`/Sprites/Icons/Defense.png`} />{card.defenseScore}</span>
                                </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Panel;