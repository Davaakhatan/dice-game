//Global variables
var activePlayer;
// two players collected scores
var scores;
// two players collecting point on round
var roundScore;

var diceDom = document.querySelector(".dice");
initGame();

// When game start
function initGame() {
  // create a var for player turn, first playar 0, second player 1.
  activePlayer = 0;
  // create a var for collected points of player
  scores = [0, 0];
  // create a var for player collecting score on their turn
  roundScore = 0;
  // create var for dice which side it got, 1-6 random
  // When program start
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  // Player's name back to default
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

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
    // If activePlayer is 0, make it 1;
    // if not, make it 0;
    switchToNextPlayer();
  }
});

// hold button eventListener
document.querySelector(".btn-hold").addEventListener("click", function () {
  // The current player collected points to add global points.

  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // check the either player win or not
  if (scores[activePlayer] >= 10) {
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Change the score
    // will turn to next player
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = "0";
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // change the red dot to activeplayer
  document.querySelector(".player-0-panel").classList.toggle("active");

  document.querySelector(".player-1-panel").classList.toggle("active");
  diceDom.style.display = "none";
}

// new game button event listener
document.querySelector(".btn-new").addEventListener("click", initGame);
