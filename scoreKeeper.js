
//inputs
var p1Button = document.querySelector("#p1Score");
//var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Score");
//var p2Button = document.querySelector("#p2Button");
var resetButton	= document.querySelector("#resetButton");
var scoreField = document.querySelector("#scoreField");

//spans
var p1ScoreSpan = document.querySelector("#p1Score");
var p2ScoreSpan = document.querySelector("#p2Score");
var goalSpan = document.querySelector("#goalSpan");

//goal selector buttons

//state variables
var p1Score = 0;
var p2Score = 0;
var goal = 0;
var playing = false;
var gameOver = false;

//initialization
setTopScore(5);



//listen for number change in scoreField
scoreField.addEventListener("change", function(){
  //set goal
  goal = Number(this.value);
  //if goal is invalid set to 1
  if (goal < 1 || Number.isNaN(goal)) {
    setTopScore(1);
  }
  else {
    setTopScore(goal);
  }
});



// listen for click player one button
p1Button.addEventListener("click", function(){
  if (!playing){
    scoreField.disabled = true;
    playing = true;
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
    scoreField.disabled = true;
    playing = true;
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

  //reset state
  playing = false;
  gameOver = false;
  scoreField.disabled = false;
});



function setTopScore(num) {
  goal = num;
  scoreField.value = goal;
}
