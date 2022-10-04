import Game from "./game/game";

const game = new Game();


console.log('Welcome to SNAP!\n');

game.addPlayer('Bob');
game.addPlayer('Brian');

game.playGame();