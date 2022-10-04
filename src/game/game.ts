import Deck from "../deck/deck";
import { Card } from "../deck/deck.definition";
import Player from "../player/player"

class Game {
    // Config allows future changes to be found quckier and the subjective rules to be clearer
    private config = {
        timeBetweenTurns: 1000,
    }

    players: Player[] = [];

    playingDeck: Deck;

    previousCard: Card;

    /**
     * Adds another player to the game.
     * @param name the name of the payer being added.
     */

    addPlayer(name: string) {
        this.players.push(new Player(name));
    }

    /**
     * This handles the game loop. Once this is called the game will play itself out untill no cards
     * are left and the winner is displayed.
     */

    async playGame() {

        // Creates a new deck to play the game with and displays the inital state of the players
        this.playingDeck = new Deck();
        console.log(this.displayScores());


        // Main loop. Continuously takes cards and adds a score for each snap.
        while(this.playingDeck.deckStack.length > 0) {
            //Waits for some time to simulate time to flip card
            await new Promise((callback) => setTimeout(callback, this.config.timeBetweenTurns));
            const isSnap = this.playRound();

            if(isSnap) {
                // Simulates each player trying to call snap and the first function to return will be the winner of the round
                let snapCalls: Promise<Player>[] = [];
                this.players.forEach((player) => {
                    snapCalls.push(player.shoutSnap());
                });
                const winner = await Promise.race(snapCalls);

                winner.score += 1;
                console.log(`${winner.playerName} wins this round`);
                console.log(this.displayScores());
            }
        }

        const playerScores = this.players.map((player) => player.score);
        //Finds multiple players to account for draws.
        const maxScore = Math.max(...playerScores);
        const winningPlayers = this.players.filter(player => player.score === maxScore)
        

        //Prints the winning player or declares a draw
        winningPlayers.length === 1 ?
            console.log(`The deck is empty and the winner is ${winningPlayers[0].playerName}`) :
            console.log(`The deck is empty and it is a draw`);

    }

    /**
     * returns all the players and their scores to print to the console.
     */

    displayScores() {
        let playerScores = '| ';
        this.players.forEach((player) => {
            playerScores += player.visualiseNameWithScore() + ' | ';
        })
        return playerScores + '\n';
    }

    /**
     * Flips a card and checks if it is the same as the previous card.
     * @returns if the round results in a snap
     */

    playRound() {
        const flippedCard = this.playingDeck.flipTopCard();

        console.log(this.playingDeck.visualisedDeckState());

        const isSnap = flippedCard.value === this.previousCard?.value;
        this.previousCard = flippedCard;
        return isSnap;
    }
}

export default Game;