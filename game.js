/*** Created by Jake on 9/05/2016.*/
var Word = require('./word.js');
var wordArray = ['Luke', 'Darth Vader', 'C3P0', 'Han Solo'];
function Game() {
    this.wins = 0;
    this.losses = 0;
    this.livesRemaining = 0;
    this.lettersUsed = [];
    this.word;
    this.startNewGame = function () {
        this.livesRemaining = 10;
        this.lettersUsed = [];
        this.word = this.getWord();
    };
    this.getWord = function () {
        var getRandom = wordArray[Math.floor(Math.random() * wordArray.length)];
        return new Word(getRandom);
    };
    this.printResults = function (str) {
        switch (str) {
            case "correct":
                console.log('That is Correct');
                break;
            case "wrong":
                console.log('That is Incorrect');
                console.log('You have # of guesses left!!', this.livesRemaining);
                break;
            case "already":
                console.log('Can\'t guess it again');
                break;
            default:
                console.log('err');
        }
    }
}
module.exports = Game;