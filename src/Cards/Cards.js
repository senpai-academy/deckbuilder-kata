
const CardsPanel = ({myCards}) => {
    return (
        
        <div className="panel panel-left">
            {myCards.map((card, index) => (
                <Card idx={index} data={card}></Card>            
            ))}
        </div>
    )
}
const Card = ({idx, data}) => {
    return (
        <div className="card-container">
            <div className="card-title">
                <img alt="fire" className="icon-title" height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} /> <span className="text-title">{data.name}</span>
            </div>
            <div className="card-img">
                <img src={`/Sprites/CardArt/${data.art}`} alt={data.name}/>
            </div>
            <div className="card-details">
                <img alt="a" className="icon-details" height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} />
                <img alt="b" className="icon-details" height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} />
                <img alt="c" className="icon-details" height={'30px'} src={`/Sprites/Icons/${data.cardType}.png`} />
            </div>
        </div>
    )
}

export {CardsPanel,Card} 