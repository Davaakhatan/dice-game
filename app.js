// create a var for player turn, first playar 0, second player 1.
var activePlayer = 1;

// create a var for collected points of player
var scores = [0, 0];

// create a var for player collecting score on their turn
var roundScore = 0;

// create var for dice which side it got, 1-6 random


//<div class="player-score" id="score-0">43</div>
// When program start
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = "block";
    diceDom.src = 'dice-' + diceNumber + '.png';

});


