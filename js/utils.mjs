/*Dynamically adding the header and footer to load fast and only when necessary */

export async function headerFooter(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

/* function to save player settings to localStorage. this setting will be used in other parts of the game */

export function saveSettings(settings) {
    localStorage.setItem('playerSettings', JSON.stringify(settings));
}

/* functions to load content for different fases of the game. there are four events in the game.
    quiet night - no changes in the game. - load a simple message for the player.
    murder - load a vote page that allow sellect one card of the page, if is a number save only the first choice, all the other option is ignored, using a list with the number of players to allow the same number of votes
    banish - load a vote page that allows all players to vote one person out of the game, again using the list of players to allow the same number votes,
    calculate the number with higher votes and return the player with the most votes as "banished", then remove it from the list of players
    Final Banishment - when all players have voted, the player with the most votes is removed from the game and the game proceeds to the next phase that is the end of turn. 
*/
