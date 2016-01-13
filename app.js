var correctCount = 0;
var incorrectCount = 0;
var questions = ['Did I grow up in Seattle area?', 'Have I ever visited Africa?', 'Do I own an 80lb German Shepherd / Husky dog?'];
var answers = ['yes', 'no', 'yes'];
var userName;

// our default errorString
var errorString = 'I\'m sorry ' + userName + ', but you did not submit an acceptable answer.\nPlease enter either "yes" or "y".';

// ask for the users name
function getUserName() {
  return prompt('Enter your name');
}

function game(question, answer) {
  var userAnswer = prompt(question).toLowerCase();
  if (userAnswer === answer) {
    correctCount++;
    alert('You rock, ' + userName + '! You got it right.');
  } else {
    alert('Bummer, ' + userName + '. You got it wrong');
    incorrectCount++;
  }
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
    console.log('The correct number is:' + correctNum);
    console.log('The user guessed: ' + userAnswer);

    //I want to keep the original answer so we can provide feedback to the user.
    convertedAnswer = parseInt(userAnswer);

    if (isNaN(convertedAnswer)) {
      alert('You did not enter an integer.\nYour input was ' + userAnswer + '.\nBummer.');
      incorrectCount++;
    } else if (convertedAnswer === correctNum) {
      alert('Good Job, ' + userName + '! You got it right!');
      correctCount++;
      correctAnswer = true;
    } else if (convertedAnswer > correctNum) {
      alert('Oops! Too high. Try again.');
      incorrectCount++;
    } else {
      //must be too low.
      alert('Oops! Too low. Try again.');
      incorrectCount++;
    }
  }

}

//lets start our game

userName = getUserName();
alert('Hi ' + userName + '! Nice to meet you.');

for (var idx in questions) {
  game(questions[idx], answers[idx]);
}

guessRandomNumber();

//lets show the uswer how many they got right and wrong.

console.log('The correctCount var is: ' + correctCount);
console.log('The incorrectCount var is ' + incorrectCount);
alert('You made ' + correctCount + ' correct guess(s) and ' + incorrectCount + ' wrong guess(s).');
