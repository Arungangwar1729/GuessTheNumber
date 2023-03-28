const check = document.querySelector(".check");
const guess = document.querySelector(".guess");
const ques = document.querySelector(".ques");
const start = document.querySelector(".start");
const highscore2 = document.querySelector(".highscore2");
const score2 = document.querySelector(".score2");
const again = document.querySelector(".again");
const image = document.getElementById("ques");

let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (msg) {
  start.textContent = msg;
};

check.addEventListener("click", function () {
  console.log(`hello`);
  const guessN = Number(guess.value);
  console.log(secretNumber);

  if (!guessN) {
    start.style.color = "yellow";
    displayMessage("No Number 🛑");
  } else if (guessN === secretNumber) {
    displayMessage("you won the game 🏆");
    start.style.color = "yellow";
    start.style.fontSize = "35px";
    image.src = `images/${secretNumber}.png`;
    document.querySelector("body").style.backgroundImage = "url(images/b.jpg)";
    if (score > highScore) {
      highscore2.textContent = score;
    }
  } else if (guessN !== secretNumber) {
    if (score > 1 && guessN > secretNumber) {
      displayMessage("too high");
      score--;
      score2.textContent = score;
    } else if (score > 1 && guessN < secretNumber) {
      displayMessage("too low");
      score--;
      score2.textContent = score;
    } else {
      displayMessage("you lost the game");
      score2.textContent = 0;
    }
  }
});
again.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundImage =
    "url(images/5040007.jpg)";
  guess.value = "";
  image.src = "images/question-mark (1).png";
  start.textContent = "start guessing......";
  start.style.color = "yellow";
  start.style.fontSize = "28px";
  score2.textContent = score;
});
