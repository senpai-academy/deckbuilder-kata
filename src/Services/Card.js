
export class Card{
    constructor(settings){
        this.name = settings.randomName();
        this.description = settings.randomDescription();
        this.cost = settings.randomCost();
        this.cardType = settings.randomCardType();
        this.attackScore = settings.randomAttack();
        this.defenseScore = settings.randomDefense();
        this.art = settings.randomArt();
        this.rarity = settings.randomRarity();
    }
}



export const RarityValue = {
    Common: "Common",
    Uncommon: "Uncommon",
    Rare: "Rare"
}

export class Rarity{
    constructor(value,color){
        this.value = value;
        this.color = color;
    }
}
