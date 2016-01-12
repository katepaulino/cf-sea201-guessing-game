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
} else if (answer === 'no' || answer === 'n') {
  alert('I\'m sorry ' + userName + ', but I did indeed grow up in the area.');
} else {
  alert(errorString);
}

//question two
answer = prompt('Have I ever visited Africa?').toLowerCase();
console.log('My Question: Have I ever visited Africa?');
console.log('The user answered: ' + answer);

if (answer === 'no' || answer === 'n') {
  alert('Good Job, ' + userName + '! I have never visited Africa.');
} else if (answer === 'yes' || answer === 'y') {
  alert('I\'m sorry ' + userName + ', but I\'ve never visited Africa.');
} else {
  alert(errorString);
}

//question three
answer = prompt('Do I own an 80lb German Shepherd / Husky dog?').toLowerCase();
console.log('My Question: Do I own an 80lb dog?');
console.log('The user answered: ' + answer);

if (answer === 'yes' || answer === 'y') {
  alert('Good Job, ' + userName + '! I do have a huge German Shepherd / Husky dog.');
} else if (answer === 'no' || answer === 'n') {
  alert('I\'m sorry ' + userName + ', but I do indeed own a huge German Shepherd / Husky dog.');
} else {
  alert(errorString);
}

//lets ask them to quess a number between 1 and 10
var min = 1;
var max = 10;
correctNum = Math.floor(Math.random() * (max - min)) + min; //took this from MDN

origAnswer = prompt('Try to guess the number. It is between 1 and 10.');
console.log('The correct number is:' + correctNum);
console.log('The user guessed: ' + answer);

//I want to keep the original answer so we can provide feedback to the user.
convertedAnswer = parseInt(origAnswer);

if (isNaN(convertedAnswer)) {
  alert('You did not enter an integer.\nYour input was ' + origAnswer + '.\nBummer.');
} else if (convertedAnswer === correctNum) {
  alert('Good Job, ' + userName + '! You got it right!');
} else if (convertedAnswer > correctNum) {
  alert('Oops! Too high.');
} else {
  //must be too low.
  alert('Oops! Too low.');
}
