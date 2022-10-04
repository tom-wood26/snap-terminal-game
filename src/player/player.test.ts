import Player from "./player";

describe('Player class tests', () => {
    test('Players can be created with the correct name', () => {
        const player = new Player('Test');
        expect(player.playerName).toEqual('Test');
    });

    test('Visualise score returns name and score', () => {
        const player = new Player('Test');
        expect(player.visualiseNameWithScore()).toEqual('Test: 0');
        player.score += 1;
        expect(player.visualiseNameWithScore()).toEqual('Test: 1');
    });

    test('Shout snap returns the player instance', async () => {
        const player = new Player("Test");
        
        const postShout = await player.shoutSnap();
        expect(player).toBe(postShout); 
    });
})