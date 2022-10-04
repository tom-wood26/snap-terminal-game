# Snap Terminal Game

Game of snap played by two computers in a terminal. Once the program is started by running

```
    npm run start
```

The game will begin and Brian and Bob will fight it out to become the winner. Cards are flipped at intervals of one second and the score will display every time a point is scored.

The flip is visualised by showing a representation of the back-facing deck side by side with the most recent card using a single character to represent the suit (above) and the number/face (below), 10 is represented as X for single character consistency.

When the deck is empty the winner is displayed in the terminal and the program ends.

Some tests are able to be run using

```
    npm test
```

They will also be automatically run when creating a PR.
