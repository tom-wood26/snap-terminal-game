

enum Suit {
    Spades = 'S',
    Clubs = 'C',
    Hearts = 'H',
    Diamonds = 'D',
}

enum Value {
    Ace = 'A',
    Two = 'C',
    Three = 'H',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Jack = 'J',
    Queen = 'Q',
    King = 'K',
}

interface Card {
    suit: Suit,
    value: Value,
}

/**
 * Controlls state and changes to the playing card deck
 */

class Deck {

    private config = {
        deckSize: 52,
    }

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

    shuffleDeck() {
        this.deckStack.sort(() => Math.random() - 0.5);
    }

    flipTopCard() {
        const topCard = this.deckStack.pop();
        if (topCard) this.openStack.push(topCard);
        return topCard;
    }


    /**
     * Visualises the current state of the game showing the deck and the most recently flipped over 
     * card
     * @returns A string with the result that should be displayed in the console.
     */
    visualisedDeckState() {
        const topCardValue = this.openStack[this.openStack.length -1];
        let visualiseResult = '';

        const cardFront = this.cardFrontStyle.map((line) => {
            line.replace('S', topCardValue.suit);
            line.replace('V', topCardValue.value);
            return line;
        });

        for (let i = 0; i < this.cardBackStyle.length; i++) {
            visualiseResult += `${this.cardBackStyle[i]}    ${cardFront[i]}\n`;
        }

        return visualiseResult;
    }

}

export default Deck;