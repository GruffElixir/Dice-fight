"use strict";
const rollbtn = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const p1 = document.querySelector(".player--0");
const p2 = document.querySelector(".player--1");
const diceImg = document.querySelector(".dice");
let newGame = document.querySelector(".btn--new");
let totScoreP1 = document.querySelector("#score--0");
let totScoreP2 = document.querySelector("#score--1");
let scoreP1 = document.querySelector("#current--0");
let scoreP2 = document.querySelector("#current--1");
let scores = [0,0];
let activeScores = [0,0];
let activePlayer = 0;

function init() {
  scores = [0,0];
  activeScores = [0,0];
  activePlayer = 0;
  p1.classList.add('.player--active');
  p2.classList.remove('.player--active');
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  totScoreP1.textContent = 0;
  totScoreP2.textContent = 0;
  document.querySelector('.winPlate').classList.add('hidden');
}

function diceRoll() {
  let x = Math.floor(Math.random()*6) + 1;
  diceImg.setAttribute("src", `dice-${x}.png`);
  if(x==1) {
    activeScores[`${activePlayer}`] = 0;
    scoreP1.textContent = activeScores[0];
    scoreP2.textContent = activeScores[1];
    switchPlayer();
  }
  else {
    activeScores[`${activePlayer}`] += x;
    scoreP1.textContent = activeScores[0];
    scoreP2.textContent = activeScores[1];
    console.log(x);
  }

}

function switchPlayer() {
  
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  activePlayer == 0 ? activePlayer= 1 : activePlayer = 0;
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  console.log(`New player is ${activePlayer}`);

}

hold.addEventListener('click', function () {
  totScoreP1.textContent = Number(totScoreP1.textContent) + Number(scoreP1.textContent);
  totScoreP2.textContent = Number(totScoreP2.textContent) + Number(scoreP2.textContent);
  if(totScoreP1.textContent > 9 || totScoreP2.textContent > 9) { 
    init()
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector('.winPlate').classList.remove('hidden');
    document.querySelector('.winPlate').textContent = `Player ${activePlayer + 1} has won the game !`;

  }
  else {
    activeScores[`${activePlayer}`] = 0; 
    scoreP1.textContent = activeScores[0];
    scoreP2.textContent = activeScores[1];
    switchPlayer();
  }
})

rollbtn.addEventListener("click", diceRoll);

newGame.addEventListener('click', init);
;
