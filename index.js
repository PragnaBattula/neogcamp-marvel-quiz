var readlineSync = require("readline-sync");
const chalk=require("chalk");
var score=0;

var userName=readlineSync.question(chalk.yellowBright("Hey!! whats your name? "));
console.log(chalk.bold.magentaBright("Welcome "+chalk.underline.cyanBright(userName) +(" Im PRAGNA..")));

console.log(chalk.whiteBright("Lets play the",chalk.bold.redBright('MARVEL GAME')));

//data of high score
var highScores = [
  {
  name:"Vijaya",
  score:8,
},
{
  name:"Preethi",
  score:6,
},
];
 
//function
function play(question,answer){
  var useranswer = readlineSync.question(question);

  if(useranswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.greenBright("You are right!"));
    score=score+1;
   
  }
  else{
    console.log(chalk.redBright("You are wrong!"));
    
   
  }
   console.log(chalk.blueBright("Your score is "+chalk.whiteBright(score)));
   console.log("------------------");
}

// array of objects

var questions = [
  {
  question:"How many Infinity Stones are there? ",
  answer:"Six"},
  {
  question:"Who was able to pick up Thor’s hammer in Endgame? ",
  answer:"Captain America"},
  {
  question:"In which movie did Spider-Man make his first appearance in the MCU? ",
  answer:"Civil War"},
  {
  question:"Nick Fury wears an eye patch over which eye? ",
  answer:"left eye"},
  {
  question:"Who was the very first Avenger? ",
  answer:"Iron Man"},
  {
  question:"Which organ of Tony Stark’s is damaged? ",
  answer:"Heart"},
  {
  question:"Who is this master spy? ",
  answer:"Black widow"},
  {
  question:"What weapon does Captain America use? ",
  answer:"Shield"},
  {
  question:"Who is the Sorcerer Supreme? ",
  answer:"Doctor Strange"},
  {
  question:"What is Hawkeye’s favored weapon? ",
  answer:"Bow"},
];

//loop
for (var i=0;i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

//print final score
 function showScores() {
  console.log("YAY!!! " +userName+ " scored:", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


showScores();
