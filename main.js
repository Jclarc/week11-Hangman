/*** Created by Jake on 9/05/2016.*/
var inquirer = require('inquirer');
var Game = require('./game.js');
var game = new Game();
function start() {
    game.startNewGame();
    getInput();
}
function getInput() {
    console.log(game.word.getDisplayWord());
    inquirer.prompt([
        {
            type: 'input',
            name: 'guess',

            message: 'Please enter a guess: ',
            validate: function (value) {
                var inputCheck = /[a-z]|[0-9]/i;
                if (value.length === 1 && inputCheck.test(value)) {
                    return true;
                } else {
                    console.log('fail');
                    return 'Please enter a valid guess:';
                }
            }
        }
    ]).then(function (answer) {
        var guess = answer.guess.toUpperCase();
        if (game.lettersUsed.indexOf(guess) === -1) {
            game.lettersUsed.push(guess);
            var correct = game.word.checkLetterInput(guess);
            if (correct) {
                game.printResults("correct");
            } else {
                game.livesRemaining--;
                game.printResults("wrong");
            }
        } else {
            game.printResults("already");
        }
        var winning = game.word.getDisplayWord() === game.word.getTargetWord();
        if (winning) {
            game.wins++;
            console.log('****************WINNER!****************');
        } else if (game.livesRemaining > 0) {
            getInput();
        } else {
            game.losses++;
            console.log('****************LOOSER!****************');
            start();
        }

    });
}
start();