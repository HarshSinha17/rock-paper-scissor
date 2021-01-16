var botchoice = "Rock";
var playerchoice = "Paper";
var chooser = "not applied";
var display = document
 .getElementById('opshow');
var display2 = document
 .getElementById('botshow');
var score = 0;
var scoredisplay = document
 .getElementById('score');

alert(
 "Rock paper scissor :D,How to play - Every win will get you 10 points.Best of luck! ",
 "");

function rock() {
 playerchoice = "Rock";
 display.innerHTML = "You Chose-Rock"
 chooser = Math.random();
 if (chooser < 1 / 3) {
  botchoice = "Rock";
 } else if (chooser > 1 / 3 &&
  chooser < 2 / 3) {
  botchoice = "Paper";
 } else if (chooser > 2 / 3) {
  botchoice = "Scissor";
 }
 display2.innerHTML =
  "Bot Chose-" + botchoice;
 check()
}

function paper() {
 playerchoice = "Paper";
 display.innerHTML =
  "You Chose-Paper"
 chooser = Math.random();
 if (chooser < 1 / 3) {
  botchoice = "Rock";
 } else if (chooser > 1 / 3 &&
  chooser < 2 / 3) {
  botchoice = "Paper";
 } else if (chooser > 2 / 3) {
  botchoice = "Scissor";
 }
 display2.innerHTML =
  "Bot Chose-" + botchoice;
 check()
}

function scissors() {
 playerchoice = "Scissor";
 display.innerHTML =
  "You Chose-Scissor"
 chooser = Math.random();
 if (chooser < 1 / 3) {
  botchoice = "Rock";
 } else if (chooser > 1 / 3 &&
  chooser < 2 / 3) {
  botchoice = "Paper";
 } else if (chooser > 2 / 3) {
  botchoice = "Scissor";
 }
 display2.innerHTML =
  "Bot Chose-" + botchoice;
 check()
}


var winner = "You";
var resultdisplay = document
 .getElementById('result');


function check() {
 if (playerchoice == "Rock" &&
  botchoice == "Scissor") {
  winner = "Player";
  resultdisplay.innerHTML =
   "Winner-" + winner;
  score += 10;
  scoredisplay.innerHTML = "Score-" +
   score;
 } else if (playerchoice ==
  "Paper" && botchoice == "Rock") {
  winner = "Player";
  resultdisplay.innerHTML =
   "Winner-" + winner;
  score += 10;
  scoredisplay.innerHTML = "Score-" +
   score;
 } else if (playerchoice ==
  "Scissor" && botchoice == "Paper"
 ) {
  winner = "Player";
  resultdisplay.innerHTML =
   "Winner-" + winner;
  score += 10;
  scoredisplay.innerHTML = "Score-" +
   score;
 } else if (playerchoice ==
  botchoice) {
  winner = "Tie"
  resultdisplay.innerHTML =
   "It's a " + winner;
 } else {
  winner = "Bot";
  resultdisplay.innerHTML =
   "Winner-" + winner;
 }
}


