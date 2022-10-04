export enum Suit {
    Spades = 'S',
    Clubs = 'C',
    Hearts = 'H',
    Diamonds = 'D',
}

export enum Value {
    Ace = 'A',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = 'X',
    Jack = 'J',
    Queen = 'Q',
    King = 'K',
}

export interface Card {
    suit: Suit,
    value: Value,
}