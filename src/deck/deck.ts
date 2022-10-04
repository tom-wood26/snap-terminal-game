
/**
 * Controls state and changes to the playing card deck
 */

import { Card, Suit, Value } from "./deck.definition";

class Deck {

    //Stores the hidden cards still left in the deck
    deckStack: Card[] = [];
    
    //Stores the cards flipped over and used in the game
    openStack: Card[] = [];

    //Stores how the hidden cards should be visualised in the terminal
    private cardBackStyle = ["-----",
                             "| X |",
                             "| X |",
                             "-----"]

    //Stores how the flipped cards should be visualised in the terminal, S representing the suit, and V the value
    private cardFrontStyle = ["-----",
                              "| S |",
                              "| V |",
                              "-----"]
                      
    constructor() {
        this.resetDeck();
    }

    /**
     * Reverts the hidden deck back to a full 52 cards in a random order
     */

    resetDeck() {
        this.deckStack = [];
        this.openStack = [];
        Object.values(Suit).forEach((suit) => {
            Object.values(Value).forEach((value) => {
                this.deckStack.push({suit: suit, value: value})
            })
        });
        this.shuffleDeck();
    }

    /**
     * Randomly shuffles the deck with the cards currently in the deck
     */

    shuffleDeck() {
        this.deckStack.sort(() => Math.random() - 0.5);
    }

    /**
     * Flips the card at the top of the deck and adds to the visible stack.
     * @returns 
     */
    flipTopCard() {
        const topCard = this.deckStack.pop();
        if (topCard) this.openStack.push(topCard);
        return topCard;
    }


    /**
     * Visualises the current state of the game showing the hidden deck and the most recently flipped over 
     * card
     * @returns A string with the result that should be displayed in the console.
     */
    visualisedDeckState() {
        const topCardValue = this.openStack[this.openStack.length -1];
        let visualiseResult = '';

        const cardFront = this.cardFrontStyle.map((line) => {
            line = line.replace('S', topCardValue.suit);
            line = line.replace('V', topCardValue.value);
            return line;
        });

        for (let i = 0; i < this.cardBackStyle.length; i++) {
            visualiseResult += `${this.cardBackStyle[i]}    ${cardFront[i]}\n`;
        }

        return visualiseResult;
    }

}

export default Deck;