import { Loading } from "../components/Lib"

const CardBank = ({myCards, select}) => {
    return (
        (myCards) ?
        <ul>
            {myCards.map((card, index) => (
                <Card idx={index} data={card} select={select}></Card>            
            ))}
        </ul>: <Loading/>
    )
}
const Card = ({idx,data,select}) => {
    return (
        <li className="flex-between fila-lista pointer" onClick={() => select(idx)} >
                <div className='relative'>
                    <span className='numero'>{data.cost}</span>
                    <div className='img-mana'></div>
                </div>
                <span className="text-bank">{data.name}</span>
            <div></div>
        </li>
    )
}


export {CardBank,Card} 