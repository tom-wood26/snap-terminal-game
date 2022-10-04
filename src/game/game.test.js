import Deck from '../deck/deck';
import Game from './game';

describe('Game class tests', () => {
    test('Players can be added to the game with the correct name', async () => {
        const game = new Game();
        expect(game.players).toHaveLength(0);
        game.addPlayer('Test');
        expect(game.players).toHaveLength(1);
        expect(game.players[0]).toMatchObject({playerName: 'Test'});
    });

    test('Players and their score are displayed correctly', async () => {
        const game = new Game();
        game.addPlayer('Test');
        const onePlayerScore = game.displayScores();
        expect(onePlayerScore).toEqual('| Test: 0 | ');

        game.addPlayer('Test2');
        const twoPlayerScore = game.displayScores();
        expect(twoPlayerScore).toEqual('| Test: 0 | Test2: 0 | ');
    });

    test('Flipping top card flips a card and returns if it is a snap', async () => {
        const game = new Game();
        game.playingDeck = new Deck();

        const firstCard = deck.deckStack[deck.deckStack.length - 1];
        const isSnap = game.playRound();
        //will always be False on first card
        expect(isSnap).toEqual(false);
        expect(game.playingDeck.deckStack.length).toEqual(51);

        const secondCard = deck.deckStack[deck.deckStack.length - 1];
        const isSnapRoundTwo = game.playRound();

        expect(isSnapRoundTwo).toEqual(secondCard.value === firstCard.value);
        
    });
});