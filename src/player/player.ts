class Player {
    playerName : string;
    score: number = 0;

    // Config allows changes to the user and how they play the game.
    private config = {
        minReactionTime: 50,
        maxReactionTime: 300,
    }

    constructor(name: string) {
        this.playerName = name;
    }

    /**
     * Waits a random amount of time based on the reaction time of the user and prints
     * snap to the console
     * 
     * @returns When player has finished shouting
     */
    async shoutSnap() {
        const maxWait = this.config.maxReactionTime;
        const minWait = this.config.minReactionTime;
        const timeToWait = Math.floor(Math.random() * (maxWait - minWait) + minWait);

        await new Promise((callback) => setTimeout(callback, timeToWait));
        console.log(`${this.playerName}: SNAP!`);
        return this;
    }

    /**
     * @returns The players name and their score.
     */

    visualiseNameWithScore() {
        return `${this.playerName}: ${this.score}`; 
    }
}

export default Player;