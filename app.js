var userName; //TODO -- move this inside of the game object.
var game;
var nameQuestion;

//udpates page with text
function displayOnPage(elmId, msg) {
  document.getElementById(elmId).innerHTML = msg;
}

function showSubmitButton() {
  document.getElementById('userSubmitButton').style.display = 'inline-block';
  document.getElementById('userAnswer').style.display = 'inline-block';
  document.getElementById('nextQuestionButton').style.display = 'none';
}

function showNextButton() {
  document.getElementById('nextQuestionButton').style.display = 'inline-block';
  document.getElementById('userSubmitButton').style.display = 'none';
  document.getElementById('userAnswer').value = ''; //clear the input field
  document.getElementById('userAnswer').style.display = 'none';
}

//grabs the users answer and then checks value.
function onSubmitAnswer(event) {
  var answer = document.getElementById('userAnswer').value;
  console.log('The answer from button submit ' + answer);

  if (userName === undefined) {
    userName = answer;
    initGame(); //start the game

    displayOnPage('userName', nameQuestion.checkAnswer(answer));
    document.getElementById('userAnswer').value = ''; //clear the input field
  } else {
    //check the answer and show the 'next' button
    displayOnPage('answer', game.currentQuestion.checkAnswer(answer));
    showNextButton();
  }
}

//grabs next question when user selects 'next' button
function displayNextQuestion(event) {
  displayOnPage('question', game.nextQuestion()); //show next question
  game.clearAnswer(); //clear previous answer
  showSubmitButton(); //unhide the submit button
}

/*
------------------------------
    DEFINING OBJECT PROTOTYPES
------------------------------
 */

//questions all have the same, repetitive properties. Lets build an object.
function Question(question, answer, correctMsg, incorrectMsg) {
  this.question = question;
  this.answer = answer;
  this.correctMsg = correctMsg;
  this.incorrectMsg = incorrectMsg;
}

Question.prototype.checkAnswer = function(userAnswer) {
  console.log('The answer is: ' + this.answer);
  if (userAnswer.toLowerCase() === this.answer) {
    return this.correctMsg;
  } else {
    return this.incorrectMsg;
  }
};

//lets make a Game
function Game(questions) {
  this.questions = questions;
  this.questionIdx = 0;
  this.currentQuestion = questions[0];
  this.questionLength = questions.length;
}

Game.prototype.nextQuestion = function() {
  if (this.questionIdx < this.questionLength - 1) {
    this.questionIdx++;
    this.currentQuestion = this.questions[this.questionIdx];
    return this.currentQuestion.question;
  } else {
    return "Nice work, you're finished.";
  }
};

Game.prototype.clearAnswer = function() {
  displayOnPage('answer', '');
};

function generateQuestions() {
  // we want to build our questions, once we have a user.
  var questionOne = new Question(
    'Did I grow up in the Seattle area?',
    'yes',
    'Good Job, ' + userName + '! I did grow up in the area.',
    "I'm sorry " + userName + ', but I did indeed grow up in the area.'
  );

  var questionTwo = new Question(
    'Have I ever visited Africa?',
    'no',
    'Good Job, ' + userName + '! I have never visited Africa.',
    "I'm sorry " + userName + ', but I have never been to Africa.'
  );

  var questionThree = new Question(
    'Do I own an 80lb German Shepherd / Husky dog?',
    'yes',
    'Good Job, ' + userName + '! I do have a huge German Shepherd / Husky dog.',
    "I'm sorry " + userName + ', but I do indeed own a huge German Shepherd / Husky dog.'
  );

  var questionFour = new Question(
    'Try to guess the number. It is between 1 and 10.',
    Math.floor(Math.random() * (10 - 1)) + 1, //took this from MDN -- generates our number
    'Good Job, ' + userName + '! You got it right!',
    '' // we will use our new CheckAnswer() to generate this...
  );

  // This question is really bastardized. We need custom
  // checkAnswer() so we overwrite the prototype.

  questionFour.checkAnswer = function(answer) {
    console.log('The correctNum var is: ' + this.answer);

    //TODO -- add handling for NaN
    if (parseInt(answer) === this.answer) {
      return this.correctMsg;
    } else if (parseInt(answer) > this.answer) {
      return 'Oops! Too high.';
    } else {
      return 'Oops! Too low.';
    }
  };

  // return an array that will be used when we create our Game
  return [questionOne, questionTwo, questionThree, questionFour];
}

function scriptInit() {
  //create a question that asks for a name
  nameQuestion = new Question(
    'What is your name?',
    true,
    'Hi ' + userName + ". Let's play a game.",
    '' // there is no incorrect answer
  );

  //no validation, just show the user's input.
  nameQuestion.checkAnswer = function(answer) {
    console.log("The user's name is: " + answer);
    return 'Hi ' + answer + ". Let's play a game.";
  };

  // show the name question
  displayOnPage('question', nameQuestion.question);
}

function initGame() {
  //start the game.
  var questions = generateQuestions();
  game = new Game(questions);
  displayOnPage('question', game.currentQuestion.question);
}

scriptInit();
