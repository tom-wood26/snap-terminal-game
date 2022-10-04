import Deck from './deck';

describe('Card deck tests', () => {
    test('Deck is created with all cards', async () => {
        const deck = new Deck();
        expect(deck.deckStack).toHaveLength(52);
    });

    test('Deck changes when shuffled deck', async () => {
        const deck = new Deck();
        const originalState = [...deck.deckStack];
        deck.shuffleDeck();
        expect(originalState).not.toEqual(deck.deckStack);
    });

    test('fliping top card takes it from deck stack and adds it to the open stack', async () => {
        const deck = new Deck();
        const topCardOnDeck = deck.deckStack[deck.deckStack.length -1];
        const flippedCard = deck.flipTopCard();
        expect(flippedCard).toEqual(topCardOnDeck);
        expect(deck.openStack[deck.openStack.length -1]).toEqual(topCardOnDeck);
        expect(deck.deckStack[deck.deckStack.length -1]).not.toEqual(topCardOnDeck);
    });

    test('Deck state is reset when required', async () => {
        const deck = new Deck();
        for(let i = 0; i < 20; i++) {
            deck.flipTopCard();
        }
        expect(deck.deckStack).toHaveLength(32);
        expect(deck.openStack).toHaveLength(20);
        deck.resetDeck();
        expect(deck.deckStack).toHaveLength(52);
        expect(deck.openStack).toHaveLength(0);
    });
})