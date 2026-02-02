import { headerFooter, saveSettings } from "./utils.mjs";

headerFooter('gameNav', '/htmls/header.html');
headerFooter('footer', '/htmls/footer.html');

function gameSet() {
    const playerSet = document.getElementById('gameForm');

    playerSet.addEventListener('submit', () => {

        const playerNumber = document.getElementById('players').value;
        saveSettings(playerNumber);
    })
}

gameSet();
