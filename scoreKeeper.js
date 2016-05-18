
//inputs
var p1Button = document.querySelector("#p1Score");
//var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Score");
//var p2Button = document.querySelector("#p2Button");
var resetButton	= document.querySelector("#resetButton");
var goalField = document.querySelector("#goalField");

//spans
var p1ScoreSpan = document.querySelector("#p1Score");
var p2ScoreSpan = document.querySelector("#p2Score");

//goal incrementers
var goalIncrement = document.querySelector("#increaseGoal");
var goalDecrement = document.querySelector("#decreaseGoal");

//state variables
var p1Score = 0;
var p2Score = 0;
var goal = 0;
var playing = false;
var gameOver = false;

//initialization
setGoal(5);



//listen for number change in goalField
goalField.addEventListener("change", function(){
  //set goal
  goal = Number(this.value);
  //if goal is invalid set to 1
  if (goal < 1 || Number.isNaN(goal)) {
    setGoal(1);
  }
  else {
    setGoal(goal);
  }
});



// listen for click on player one button
p1Button.addEventListener("click", function(){
  if (!playing){
    beginGame();
  }

  if (gameOver) {
    p1Button.disabled = true;
    p2Button.disabled = true;
  }

  else {
    p1Score++;
    p1ScoreSpan.textContent = p1Score;
    if (p1Score === goal) {
      p1ScoreSpan.classList.add("winner");
      gameOver = true;
    }
  }
});



// listen for click player two button
p2Button.addEventListener("click", function(){
  if (!playing) {
    beginGame();
  }

  if (gameOver) {
    p1Button.disabled = true;
    p2Button.disabled = true;
  }

  else {
    p2Score++;
    p2ScoreSpan.textContent = p2Score;

    if (p2Score === goal) {
      p2ScoreSpan.classList.add("winner");
      gameOver = true;
    }
  }
});

// listen for incrementers
goalIncrement.addEventListener("click", function() {
  setGoal(++goal);
});

goalDecrement.addEventListener("click", function() {
  if ( --goal < 1 ) {
    setGoal(1);
  } else {
    setGoal(goal);
  }
});




// listen for reset button click
resetButton.addEventListener("click", function() {
    //reset p1
  p1Score = 0;
  p1ScoreSpan.textContent = p1Score;
  p1ScoreSpan.classList.remove("winner");
  p1Button.disabled = false;

  //reset p2
  p2Score = 0;
  p2ScoreSpan.textContent = p2Score;
  p2ScoreSpan.classList.remove("winner");
  p2Button.disabled = false;

  //reset incrementers
    goalIncrement.style.display = "block";
    goalDecrement.style.display = "block";

  //reset state
  playing = false;
  gameOver = false;
  goalField.disabled = false;
});



function setGoal(num) {
  goal = num;
  goalField.value = goal;
}

function beginGame() {
    goalField.disabled = true;
    goalIncrement.style.display = "none";
    goalDecrement.style.display = "none";
    playing = true;
}
