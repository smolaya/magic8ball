let readlineSync = require('readline-sync');

let play = true;

let userName = readlineSync.question ('What is your name?');

let lastName = readlineSync.question ('What is your last name?');



  function game(){
    let letsPlay = readlineSync.question ('Do you want to ask the mysterious magic 8 ball a question?(yes/no)');

      if (letsPlay === 'yes'){
        readlineSync.question ('What do you want to ask the magic 8 ball?');
      }
      else if (letsPlay === 'no'){
        console.log('bye!');
        return;
      }
      else {
        console.log('I could not understand you, please try again..');
        return game();
      };




    let randomNumber = Math.floor(Math.random() * 8);

    let eightBall = '';

    switch (randomNumber) {
      case 0:
        eightBall = 'it is certain';
        break;
      case 1:
        eightBall = 'it is decidedly so';
        break;
      case 2:
        eightBall = 'The future is not so bright';
        break;
      case 3:
        eightBall = 'The future is hazy, I cannot see the answer you seek';
        break;
      case 4:
        eightBall = 'My sources say no'
        break;
      case 5:
        eightBall = 'It is better that you never know the answer to that';
        break;
      case 6:
        eightBall = 'The future looks bright';
        break;
      case 7:
        eightBall = 'Definitely not';
      break;
    }

  console.log(eightBall);

let playAgain = readlineSync.question('Do you want to play again? yes or no?')
if (playAgain === 'yes'){
  return game();
} else {
  console.log("bye!")
}
play = false
}

console.log (`Hello ${userName} ${lastName}. You are walking down a path after hiking on the weekend, when you suddenly see something shiny on the grass. You realize the shiny object is a cool magic 8 ball! You pick it up, and take it home.`);

console.log ('After looking at the mysterious magic 8 ball more closely, you read the label on the back which says "all questions will be answered, your future will be deciphered". It sparks your curiousity...However, you are still skeptical...')

game();
