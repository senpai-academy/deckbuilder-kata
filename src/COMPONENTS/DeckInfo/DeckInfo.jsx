import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DeckGrid from "../DeckGrid/DeckGrid";

const DeckInfo = (props)=>{

    const [creature, setCreature] = useState([])
    const [spell, setSpell] = useState([])
    const [instant, setInstant] = useState([])
    const [mana, setMana] = useState(null)
    
    /*useEffect(()=>{
        if(props.storeCard.cardType === "Creature"){            
            setCreature([...creature, props.storeCard.cardType])
        }
        else if(props.storeCard.cardType === "Spell"){
            setSpell([...spell, props.storeCard.cardType])
        }
        else{
            setInstant([...instant, props.storeCard.cardType])
        }
    })*/


   /* useEffect(()=>{
            props.getInfo.forEach((element,index) => {
                if(element.cardType === "Creature" && creature[index].name !== element.name){   
                    let temp = creature 
                    temp.push(element)        
                    setCreature(temp)
                }
                else if(element.cardType === "Spell"){
                    let temps = spell
                    temps.push(element)
                    setSpell(temps)
                }
                else{
                    let tempi = instant
                    tempi.push(element)
                    setInstant(tempi)
                }
                console.log(creature)
                console.log(spell)
                console.log(instant)

                setMana(mana+element.cost)
                
            });
        },[props.getInfo])

        /*useEffect(()=>{
            initData()
        },[])*/


    return(
        <div className='deckInfo'>
            <div>
                <span>{props.getInfo.length}/12</span>
            </div>
            
            <div className="troopClass">
                <div>
                    <img src={`Sprites/Panels/Attack.png`} alt="" />
                    <span>{/*creature.length*/}</span>
                </div>

                <div>
                    <img src={`Sprites/Panels/Defense.png`} alt="" />
                    <span>{/*spell.length*/}</span>
                </div>

                <div>
                    <img src={`Sprites/Panels/Attack.png`} alt="" />
                    <span>{/*instant.length*/}</span>
                </div>           
            </div>

            <div>
                <span>{mana}</span>
            </div>
        </div>
    )
}

export default DeckInfo;