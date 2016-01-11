# Taylor's Guessing Game

## How it works
The game will first ask the user for their name.
Then the user will be asked a series of questions. Once they submit their answers, the page will respond with an answer.
The user can then go onto the next question.

This continues until there are no more question left.

## How it's built
The core game revolves around two main objects:
- `Game` object
- `Question` object

### Question objects
A  `Question` object is created for every question that should be presented to the user.
The basic object looks like this:

```javascript
question = {
  this.question = string // the question text that should be presented to the user
  this.answer = answer // the correct answer to the question
  this.correctMsg = string // the message that is presented for a correct answer
  this.incorrectMsg = string // the message that is presented for an incorrect answer
}
```
**Question Methods**

`checkAnswer(answer)`

This method validates an answer and returns  `this.correctMsg` or `this.incorrectMsg`

The `checkAnswer()` method can be over written if a particular question requires more complex evaluation.

### The Game object
A `Game` object takes an array of `Questions` and iterates over them in order until all questions have been answered.

The `Game` object will start with the first question in the array.

The current `Question` can be accessed via the `Game.currentQuestion` property.

**Game Methods**

`nextQuestion()`

This method sets `Game.currentQuestion` to the next question in the array. If the user has answered the last question then the method will return a string indicating the game is finished.

`clearAnswer()`

This method clears the current answer from the screen, and probably shouldn't be a part of the `Game` class. But it will live there for now...

### The Flow
The script is first initialized by building a question that asks for the user's name.

When the user submits and answer, the script will check the var `userName`, if it is `undefined` then we set the `userName` and build the rest of our questions.

We have to wait to build the rest of our questions, because many of the `correctMsg` and `incorrectMsg` properties are strings that use the user's name. If the properties are created too early, then the messages will not have the correct user name.

Once the questions are built, a new `Game` object is created and initialized. The game begins.
