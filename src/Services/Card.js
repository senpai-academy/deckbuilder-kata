
export class Card{
    constructor(settings){
        this.name = settings.randomName();
        this.description = settings.randomDescription();
        this.cost = settings.randomCost();
        this.cardType = CardType[Math.random(3)];
        this.attackScore = settings.randomAttack();
        this.defenseScore = settings.randomDefense();
        this.art = settings.randomArt();
        this.rarity = settings.rarities[Math.random(settings.rarities.length)]
    }
}

export const CardType = {
    Creature: 0,
    Instant: 1,
    Spell: 2
}

export const RarityValue = {
    Common: 0,
    Uncommon: 1,
    Rare: 2
}

export class Rarity{
    constructor(value,color){
        this.value = value;
        this.color = color;
    }
}
