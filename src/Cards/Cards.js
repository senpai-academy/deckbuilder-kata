import { Loading } from "../components/Lib"

const CardsPanel = ({myCards,selectedCard}) => {

    return (
        (myCards) ?
        <div className="panel panel-left">
            {(selectedCard)?
            selectedCard.name : ''
            }
            {myCards.map((card, index) => (
            <></>         
            ))}
        </div>: <Loading/>
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

const CardList = ({ myCards,selectAction }) => {
    return myCards ? (
      <div className="panel panel-right">
        <ul className="card-list">
          {myCards.map((card, index) => (
            <CardItem
             idx={index}
              data={card}
              selectAction={selectAction}
              ></CardItem>
          ))}
        </ul>
      </div>
    ) : (
      <Loading />
    );
  };
  
  const CardItem = (props) => {
    return (
      <li key={props.idx}
      onClick = {()=>props.selectAction(props.idx)}
      >
        <span id="costCard">{props.data.cost}</span>
        <span id="nameCard">{props.data.name}</span>
      </li>
  )}

export {CardsPanel,Card,CardList} 