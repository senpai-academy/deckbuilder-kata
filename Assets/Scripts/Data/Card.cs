using System;
using UnityEngine;

namespace Data
{
    public class Card
    {
        public string Name { get; private set; }
        public int Cost { get; private set; }
        public string Description { get; private set; }
        public Sprite Art { get; private set; }
        public CardType CardType { get; private set; }
        public Rarity Rarity { get; private set; }
        public int AttackScore { get; private set; }
        public int DefenseScore { get; private set; }

        public static Card GenerateCard(CardSettings settings)
        {
            var cardType = new[] {CardType.Creature, CardType.Instant, CardType.Spell}.PickOne();

            var card = new Card
            {
                Name = settings.RandomName(),
                Description = settings.RandomDescription(),
                Cost = settings.RandomCost(),
                CardType = cardType,
                Rarity = settings.Rarities.PickOne(),
                AttackScore = cardType == CardType.Creature ? settings.RandomAttack() : 0,
                DefenseScore = cardType == CardType.Creature ? settings.RandomDefense() : 0,
                Art = settings.RandomArt()
            };

            return card;
        }
    }

    [Serializable]
    public struct Rarity
    {
        public RarityValue Value;
        public Color Color;
    }

    public enum CardType
    {
        Creature,
        Instant,
        Spell
    }

    public enum RarityValue
    {
        Common,
        Uncommon,
        Rare
    }
}

