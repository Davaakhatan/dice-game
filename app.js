// create a var for player turn, first playar 0, second player 1.
var activePlayer = 1;

// create a var for collected points of player
var scores = [0, 0];

// create a var for player collecting score on their turn
var roundScore = 0;

// create var for dice which side it got, 1-6 random
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>

document.querySelector("#score-0").textContent = 0;
document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;


document.querySelector(".dice").style.display = "none";



console.log("Dice : " + dice);
