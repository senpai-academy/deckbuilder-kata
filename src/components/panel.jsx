import React from "react";




const Panel = ({cards}) =>{
    return (
        <div className={"Container Panel"}>
            {
                cards.map(card=>{
                    return (
                        <div>
                            <div className={"cost"}>{card.cost}</div>
                            <div>{card.name}</div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default Panel;