/* getting buttons from html */

const btnNight = document.getElementById('night');
const btnMurder = document.getElementById('murder');
const btnBanish = document.getElementById('banish');
const btnFBanish = document.getElementById('fBanish');

/* initiate the counter variable */

let nightCounter = parseInt(localStorage.getItem('nightCounter')) || 0;

/* button logic for the four events.
    night - will display a message "Quiet Night - no one dies tonight"
    murder - will load a vote page to allow eliminate one player
    banish - will allow all players to vote one person out of the game
    fbanishement will alllow all players that are still in the game to vote and this will automatically 
    finish that round, calling for the "end page".
*/


btnNight.addEventListener('click', function () {
    
    nightCounter++;

    localStorage.setItem('nightCounter', nightCounter);
    window.location.href = 'fases.html';

});

btnMurder.addEventListener('click', function () {
   
    window.location.href = 'fases.html';

});