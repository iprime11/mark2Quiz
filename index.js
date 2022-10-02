var readlineSync = require('readline-sync');
//high scores 

var highScores = [
  { name: "Aviraj", score: 9,},
  { name: "Akash ",  score: 10,},
  { name: "Nisarg",  score: 8,},
  ]

welcome();

function welcome(){
  var answer = readlineSync.question("Are You Ready For One piece Quiz ?");
  welcomeanswer = "Yes";
  if(answer.toLowerCase() == welcomeanswer.toLowerCase() )
   console.log("Lessss go!");
   else {
    console.log("YES ? Lessss goo!");}
    console.log('\x1b[33m%s\x1b[0m\x1b[5m' ,"---------------------------------------------")
}



var score = 0; 

//quiz and answers 

var question = [];

var answer = [];
 
question[1] = "Who is the main character in one piece ? ";
answer[1] = "Monkey D luffy";

question[2] = "Who is the first one to join Luffy's crew ? ";
answer[2] = "Roronoa Zoro";

question[3] = "What is the nickname of luffy ? ";
answer[3] = "The fifth emperor of the Sea";

question[4] = "How many swords Zoro uses in fights?";
answer[4] = "three";

question[5] = "Who is the navigator of the Ship ?";
answer[5] = "Nami";

question[6] = "What is the name of luffy's first ship ?";
answer[6] = "The going merry";

question[7] = "Who is the creater of one piece?";
answer[7] = "ODA";

question[8] = "who is the last member to join luffy's crew in 2021?";
answer[8] = "The first son of the sea Jimbe";

question[9] = "Who is the cook of the ship?";
answer[9] = "Sanji";

question[10] = "What is the Nickname of the Zoro?";
answer[10] = "Pirate Hunter Zoro";

//calling funcation play 
for(var i=1 ; i<= 10 ; i++){
play(question[i], answer[i])
console.log('\x1b[33m%s\x1b[0m\x1b[5m' ,"---------------------------------------------")
}

//body of function play
function play(question, answer) {

  var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("You are right!");
    score = score + 1;
    console.log('\x1b[33m%s\x1b[0m\x1b[5m' , "Current Score is: " + score)
  } else {
    console.log("You are wrong!");
    console.log('\x1b[33m%s\x1b[0m\x1b[5m' , "Current Score is: " + score)
  }
}

//calling function show scores
showScores();

function showScores() {


  console.log("Nani ? You Scored : ", score);
  
  console.log("---------------------------------------------")
  
  console.log('\x1b[33m%s\x1b[0m' , "Some of the highest scores : ")

  highScores.map(score => console.log(score.name, " : ", score.score))

  console.log("---------------------------------------------")
}