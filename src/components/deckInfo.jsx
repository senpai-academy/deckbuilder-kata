

const DeckInfo = ({myCards}) => {
    let manatotalcost = 0
    let criaturascartas = 0
    let spellcartas = 0
    let instantcartas = 0
    myCards.forEach(card => {
        manatotalcost = card.cost + manatotalcost
});

myCards.forEach(card => {
    switch (card.cardType) {
        case "Creature":
            criaturascartas+= 1
        break;
        case "Spell":
            spellcartas+= 1
        break;    
        default:
            instantcartas+= 1 
        break;
    }
});
    return (
        <div>
            <div className={"deck-Info"}>
                <div className="deck-top">
                    <span className="deckTopDetails">
                        {myCards.length} / 30
                    </span>
                </div>

                <div className="deck-mid flow-row">
                    <div className="deck-creature">
                        <span className="iconDeckDetails">
                            <img alt="creature" className="icon-deck" src="/Sprites/Icons/Creature.png"/>{criaturascartas}
                        </span>
                    </div>

                    <div className="deck-spell">
                        <span className="iconDeckDetails">
                            <img alt="spell" className="icon-deck" src="/Sprites/Icons/Spell.png"/>{spellcartas}
                        </span>
                        
                    </div>

                    <div className="deck-instant">
                        <span className="iconDeckDetails">
                            <img alt="instant" className="icon-deck" src="/Sprites/Icons/Instant.png"/>{instantcartas}
                        </span>
                        
                    </div>

                </div>

                <div className="deck-bot">
                        <div className='relative'>
                            <span className='numero-decktotal'>{manatotalcost}</span>
                            <div className='img-mana-deckTotal'></div>
                        </div>   
                </div>
            </div>
        </div>
    )
}

export default DeckInfo