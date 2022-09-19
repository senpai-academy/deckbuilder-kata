using System;
using System.Linq;
using UnityEngine;
using Random = UnityEngine.Random;

namespace Data
{
    [Serializable]
    public class CardSettings
    {
        const string lorem =
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        
        public int MinAttack;
        public int MaxAttack;
        public int MinCost;
        public int MaxCost;
        public int MinDefense;
        public int MaxDefense;
        public int MinDescLength;
        public int MaxDescLength;

        public Rarity[] Rarities;

        public Sprite[] CardArts;

        public string[] Adjectives;
        public string[] Nouns;

        public int RandomCost() => Random.Range(MinCost, MaxCost + 1);
        public int RandomAttack() => Random.Range(MinAttack, MaxAttack + 1);
        public int RandomDefense() => Random.Range(MinDefense, MaxDefense + 1);
        public string RandomName() => $"{Adjectives.PickOne()} {Nouns.PickOne()}";
        public Sprite RandomArt() => CardArts.PickOne();

        public string RandomDescription()
        {
            var startingIndex = Random.Range(0, lorem.Length/2);
            var length = Random.Range(MinDescLength, MaxDescLength);
            startingIndex = lorem[startingIndex] == ' ' ? startingIndex + 1 : startingIndex;

            var result = lorem.Remove(0, startingIndex);
            result = result.Length > length ? result.Remove(length, (result.Length - length)) : result;
            return result;
        }
    }
}