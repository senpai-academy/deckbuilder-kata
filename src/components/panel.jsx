import React from "react";




const Panel = (props) =>{
    return (
        <div className={"Container Panel"}>
            {
                props.cards.map((card,key)=>{
                    return (
                        <div key={key}>
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