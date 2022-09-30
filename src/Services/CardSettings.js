import { Rarity, RarityValue } from "./Card";

export class CardSettings{
    constructor(){
        this.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        this.minDescriptionLength = 25;
        this.maxDescriptionLength = 45;
        this.minAttack = 1;
        this.maxAttack = 6;
        this.minCost = 0;
        this.maxCost = 9;
        this.minDefense = 1;
        this.maxDefense = 7;
        this.rarities = [new Rarity(RarityValue.Common,"#FFFFFF"),
                        new Rarity(RarityValue.Uncommon,"#2EEE77"),
                        new Rarity(RarityValue.Rare,"#F3E658")];
        this.adjetives = ["Fiery","Furious","Corrosive","Explosive",
                        "Raging","Golden","Frost","Deadly","Healing","Avenging"];
        this.cardTypes = ["Creature","Spell","Instant"];
        this.nouns = ["Goblin","Orc","Bolt","Wyrm","Strike","Vampire","Demon","Angel","Reaper","Curse"];
    }

    randomCost = () => getRandomInt(this.minCost,this.maxCost);
    randomAttack = () => getRandomInt(this.minAttack, this.maxAttack);
    randomDefense = () => getRandomInt(this.minDefense,this.maxDefense);
    randomArt = () => ["arranca.jpg","bicho.jpeg","blizzard.png",
                        "coso.jpg","elem.jpg","enano.jpg","fire.jpg",
                        "fire2.jpg","ghostrider.jpg","golem.jpg","mago.jpg",
                        "rayo.jpg","rayo2.jpg","tigre.jpeg","vamp.jpg"][getRandomInt(0,14)]
    randomRarity = () => this.rarities[getRandomInt(0,3)]
    randomName = () => `${this.adjetives[getRandomInt(0,10)]} ${this.nouns[getRandomInt(0,10)]}`
    randomRarity = () => this.rarities[getRandomInt(0,3)];
    randomCardType = () => this.cardTypes[getRandomInt(0,3)]

    randomDescription(){
        var startingIndex = getRandomInt(0,this.lorem.Length/2);
        var length = getRandomInt(this.minDescriptionLength, this.maxDescriptionLength);
        startingIndex = this.lorem[startingIndex] == ' ' ? startingIndex + 1 : startingIndex;

        var result = this.lorem.slice(startingIndex);
        result = result.length > length ? result.slice(length, (result.length - length)) : result;
        return result;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
