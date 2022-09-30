import React from "react";

const Panel = (props) =>{
    return (
        
        <div className={"container"}>
            {
                props.cards.map((card,key)=>{
                    return (

                            <div className={"card-container"} key={key}>
                                <div className="card-title-deck">
                                    <div className='relative'>
                                        <span className='numero-deck'>{card.cost}</span>
                                        <div className='img-mana-deck'></div>
                                    </div>   
                                    <span className="text-title-deck">{card.name}</span>
                                </div>
                                <div className="card-img-panel">
                                    <img src={`/Sprites/CardArt/${card.art}`} alt={card.name}/>
                                </div>
                                    <div className="card-details-panel">
                                        <img alt="a" className={"icon-details-rarity "+(card.rarity.value)} height={'30px'} src={`/Sprites/Icons/${card.cardType}.png`} />
                                        <span  className="flex-column icon-detail-text">
                                            <img alt="b" className="icon-details" height={'30px'} src={`/Sprites/Icons/Attack.png`} />{card.attackScore}
                                            </span>
                                        <span className="flex-column icon-detail-text">
                                            <img alt="c" className="icon-details" height={'30px'} src={`/Sprites/Icons/Defense.png`} />{card.defenseScore}
                                        </span>
                                    </div>
                            </div>  
                    )
                })
            }
            
        </div>
    )
}

export default Panel;