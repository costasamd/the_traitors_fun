const btnNight = document.getElementById('night');
const btnMurder = document.getElementById('murder');
const btnBanish = document.getElementById('banish');
const btnFBanish = document.getElementById('fBanish');

let nightCounter = parseInt(localStorage.getItem('nightCounter')) || 0;

btnNight.addEventListener('click', function () {
    
    nightCounter++;

    localStorage.setItem('nightCounter', nightCounter);

    document.getElementById('gameMessage').textContent = `Quiet Night - tonight no one Dies`;

});