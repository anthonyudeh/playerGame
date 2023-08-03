'use strict'

const rollDice = document.querySelector('.first-btn');
const holdBtn = document.querySelector('.second-btn');
const newGameBtn = document.querySelector('.new-game-btn');
const score1El = document.getElementById('score--1');
const score0El = document.getElementById('score--0');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player01EL = document.querySelector('.first-game-blk');
const player02EL = document.querySelector('.second-game-blk');
const diceDisplay = document.querySelector('.hidden');
const dice = document.querySelector('.dice');
const firstBlk = document.querySelector('.second-game-blk');
const secondBlk = document.querySelector('.first-game-blk');



score1El.textContent = 0;
score0El.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;



//rolling dice functionality 
rollDice.addEventListener('click', function () {
  //generating random numbers 
  const random = Math.trunc(Math.random() * 6) + 1;
  console.log(random)
  //display dice
  diceDisplay.classList.remove('hidden');
  dice.src = `image-${random}.png`;

  //if dice roll is 1, switch to the other player
  if (random !== 1) {
    //Add number to score  board
    currentScore += random
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    // current0El.textContent = currentScore; 

  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //switch to the other player
    activePlayer = activePlayer === 0 ? 1 : 0;
    //if activePlayer is triple equals to 0 then the new activePlayer should be 1 else let it be 0 ,we are reassigning the activePlayer 

    //set current score back to zero
    currentScore = 0;

    //change background color 
    firstBlk.classList.toggle('display--0');
    secondBlk.classList.toggle('display--0');
  }


})


//hold button to hold our scores 

const scoreReset = function(){
  if(currentScore!= 1){
    currentScore = 0;
  }
}


holdBtn.addEventListener('click', function () {
  if(activePlayer === 0){
    
    score0El.textContent = Number(score0El.textContent) + currentScore
    scoreReset()

  }else if(activePlayer === 1){
    
    score1El.textContent =  Number(score1El.textContent) + currentScore
    scoreReset()
  }
})