var correctCount = 0;
var incorrectCount = 0;
var questions = ['Did I grow up in Seattle area?', 'Have I ever visited Africa?', 'Do I own an 80lb German Shepherd / Husky dog?'];
var answers = ['yes', 'no', 'yes'];
var userName;

// our default errorString
var errorString = 'I\'m sorry ' + userName + ', but you did not submit an acceptable answer.\nPlease enter either "yes" or "y".';

function updatePage(elId, text) {
  document.getElementById(elId).textContent = text;

}

// ask for the users name
function getUserName() {
  return prompt('Enter your name');
}

function userScore() {
  var score = 'You got ' + correctCount + ' right and ' + incorrectCount + ' wrong!';
  updatePage('userScore', score);
}

function game(question, answer) {
  var userAnswer = prompt(question).toLowerCase();
  updatePage('question', question);
  updatePage('answer', userAnswer);
  if (userAnswer === answer) {
    correctCount++;
    updatePage('isCorrect', 'You rock, ' + userName + '! You got it right.');
  } else {
    updatePage('isCorrect', 'Bummer, ' + userName + '. You got it wrong');
    incorrectCount++;
  }

  userScore();
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function guessRandomNumber() {

  //lets ask them to quess a number between 1 and 10
  var correctNum = randomNumber(1, 10);

  // did our user have the correct answer?
  var correctAnswer = false;

  // we want to keep going until the user guesses the correct answer.
  while (!correctAnswer) {

    var userAnswer = prompt('Try to guess the number. It is between 1 and 10.');
    updatePage('question', 'Try to guess the number. It is between 1 and 10.');
    updatePage('answer', userAnswer);
    console.log('The correct number is: ' + correctNum);
    console.log('The user guessed: ' + userAnswer);

    //I want to keep the original answer so we can provide feedback to the user.
    convertedAnswer = parseInt(userAnswer);

    if (isNaN(convertedAnswer)) {
      updatePage('isCorrect', 'You did not enter an integer.\nYour input was ' + userAnswer + '.\nBummer.');
      incorrectCount++;
    } else if (convertedAnswer === correctNum) {
      updatePage('isCorrect', 'Good Job, ' + userName + '! You got it right!');
      correctCount++;
      correctAnswer = true;
    } else if (convertedAnswer > correctNum) {
      updatePage('isCorrect', 'Oops! Too high. Try again.');
      incorrectCount++;
    } else {
      //must be too low.
      updatePage('isCorrect', 'Oops! Too low. Try again.');
      incorrectCount++;
    }

    userScore();
  }
}

function runGame() {
  userName = getUserName();
  alert('Hi ' + userName + '! Nice to meet you.');

  for (var idx in questions) {
    game(questions[idx], answers[idx]);
  }

  guessRandomNumber();
}

runGame();

document.write('<h3>Thanks <a href="https://github.com/meganwalter">Megan</a> for contributing!</h3>');
