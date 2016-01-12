var correctCount = 0;
var incorrectCount = 0;

// ask for the users name
var userName = prompt('Enter your name');
console.log('This is the userName var: ' + userName);

alert('Hi ' + userName + '! Nice to meet you.');

// our default errorString
var errorString = 'I\'m sorry ' + userName + ', but you did not submit an acceptable answer.\nPlease enter either "yes" or "y".';

//lets start the game
var answer = prompt('Did I grow up in Seattle area?').toLowerCase();
console.log('My Question: Did I grow up in Seattle?');
console.log('The user answered: ' + answer);

//check answer
if (answer === 'yes' || answer === 'y') {
  alert('Good Job, ' + userName + '! I did grow up in the area.');
  correctCount++; //increment the correct counter.
} else if (answer === 'no' || answer === 'n') {
  alert('I\'m sorry ' + userName + ', but I did indeed grow up in the area.');
  incorrectCount++;
} else {
  alert(errorString);
  incorrectCount++;
}

//question two
answer = prompt('Have I ever visited Africa?').toLowerCase();
console.log('My Question: Have I ever visited Africa?');
console.log('The user answered: ' + answer);

if (answer === 'no' || answer === 'n') {
  alert('Good Job, ' + userName + '! I have never visited Africa.');
  correctCount++;
} else if (answer === 'yes' || answer === 'y') {
  alert('I\'m sorry ' + userName + ', but I\'ve never visited Africa.');
  incorrectCount++;
} else {
  alert(errorString);
  incorrectCount++;
}

//question three
answer = prompt('Do I own an 80lb German Shepherd / Husky dog?').toLowerCase();
console.log('My Question: Do I own an 80lb dog?');
console.log('The user answered: ' + answer);

if (answer === 'yes' || answer === 'y') {
  alert('Good Job, ' + userName + '! I do have a huge German Shepherd / Husky dog.');
  correctCount++;
} else if (answer === 'no' || answer === 'n') {
  alert('I\'m sorry ' + userName + ', but I do indeed own a huge German Shepherd / Husky dog.');
  incorrectCount++;
} else {
  alert(errorString);
  incorrectCount++;
}

//lets ask them to quess a number between 1 and 10
var min = 1;
var max = 10;
correctNum = Math.floor(Math.random() * (max - min)) + min; //took this from MDN

// did our user have the correct answer?
var correctAnswer = false;

while (!correctAnswer) {

  var userAnswer = prompt('Try to guess the number. It is between 1 and 10.');
  console.log('The correct number is:' + correctNum);
  console.log('The user guessed: ' + answer);

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

//lets show the uswer how many they got right and wrong.

console.log('The correctCount var is: ' + correctCount);
console.log('The incorrectCount var is ' + incorrectCount);
alert('You made ' + correctCount + ' correct guess(s) and ' + incorrectCount + ' wrong guess(s).');
