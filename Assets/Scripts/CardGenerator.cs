using Data;
using UnityEngine;

public class CardGenerator : MonoBehaviour
{
    public CardSettings GenerationSettings;

    public Card GenerateCard() => Card.GenerateCard(GenerationSettings);
}
