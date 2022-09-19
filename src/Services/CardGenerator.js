import { Card } from "./Card";
import { CardSettings } from "./CardSettings";

export class CardGenerator{
    constructor(){
        this.cardSettings = new CardSettings();
    }

    generateCard = () => new Card(this.cardSettings);
}