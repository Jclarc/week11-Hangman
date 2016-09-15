/*** Created by Jake on 9/05/2016.*/
function Letter(char) {
    this.char = char;
    this.underscore = "_";
    this.guessed = false;
    this.getCharacter = function() {
        var char = ' ';

        if (this.guessed) {
            char = this.char;
        } else {
            char = this.underscore;
        }
        return char;
    }
}
module.exports = Letter;