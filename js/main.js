import { headerFooter, saveSettings } from "./utils.mjs";

headerFooter('gameNav', '/htmls/header.html');
headerFooter('footer', '/htmls/footer.html');

document.addEventListener('DOMContentLoaded', () => {
    gameSet();
});

function gameSet() {
    const playerSet = document.getElementById('gameForm');

    if (!playerSet) return;

    playerSet.addEventListener('submit', () => {

        const playerNumber = document.getElementById('players').value;
        saveSettings(playerNumber);

    })
}

gameSet();
