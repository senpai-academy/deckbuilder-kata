import { Loading } from "../components/Lib"

const CardBank = ({myCards}) => {
    return (
        (myCards) ?
        <ul>
            {myCards.map((card, index) => (
                <Card idx={index} data={card}></Card>            
            ))}
        </ul>: <Loading/>
    )
}
const Card = ({idx, data}) => {
    return (
        <li className="flex-between fila-lista">
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