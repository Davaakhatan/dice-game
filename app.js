// create a var for player turn, first playar 0, second player 1.
var activePlayer = 0;

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

// Roll Dice event Listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // between 1 to 6 random dice number
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // display dice picture
  diceDom.style.display = "block";

  // display the corresponding dice picture
  diceDom.src = "dice-" + diceNumber + ".png";

  // if the number is 1 < Change the current player's score
  if (diceNumber !== 1) {
    // it's higher than 1 so, add the player's current number corresponding dice number
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // ==1 2'nd player's turn
    // change the current player's score to 0;
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // If activePlayer is 0, make it 1;
    // if not, make it 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // change the red dot to activeplayer
    document.querySelector(".player-0-panel").classList.toggle("active");
    diceDom.style.display = "none";
    document.querySelector(".player-1-panel").classList.toggle("active");


  }
});
