var _ = require('underscore');

function Pangram(phrase) {
  this.phrase = phrase;
}

Pangram.prototype.isPangram = function () {
 var alphabet = "abcdefghijklmnopqrstuvwxyz";
 var sorted = _.unique(this.phrase.toLowerCase()
                         .replace(/[^a-z]/g, '')
                         .split(''))
                         .sort()
                         .join('');
 return sorted === alphabet;
};

module.exports = Pangram;
